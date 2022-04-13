import { View, StyleSheet, Dimensions } from 'react-native';
import React, { FC, useRef } from 'react';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { divide, multiply } from 'react-native-reanimated';

import { Slide, SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import { theme } from '../../components';
import { AppRoutes, StackNavigationProps } from '../../components/Navigation';

interface OnboardingProps {}

const { width } = Dimensions.get('window');
// const BORDER_RADIUS = 75;

const slides = [
  {
    title: 'Relaxed',
    subtitle: 'Find Your Outfits',
    description: "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: '#BFEAF5' /*
  if there were pictures
  picture: {
    src: require(yada yada),
    width: 2513,
    height: 3583
  }
*/,
  },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  { title: 'Eccentric', subtitle: 'Your Style, Your Way', description: 'Create your individual & unique style and look amazing everyday', color: '#FFE4D9' },
  { title: 'Funky', subtitle: 'Look Good, Feel Good', description: 'Discover the latest trends in fashion and explore your personality', color: '#FFDDDD' },
];

const Onboarding: FC<OnboardingProps> = ({ navigation }: StackNavigationProps<AppRoutes, 'Onboarding'>) => {
  const scroll = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler();
  // const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        {/* {slides.map((slide, i) => {
          // interpolate from reanimated
          const opacity = interpolate(x, {
            inputRange: [
              (i - 0.5) * width,
              i * width,
              (i + 0.5) * width,
            ],
            outputRange: [0, 1, 0],
            extrapolate: Extrapolate.CLAMP,
          return (
            <Animated.View style={[{opacity}, styles.underlay]} key={i}>
              <Image
                source={picture.src}
                style={[styles.picture, { width: width - BORDER_RADIUS, height: (width - BORDER_RADIUS) * (picture.height / picture.width) }]}
              />
            </Animated.View>
          );
        })} */}

        <Animated.ScrollView
          ref={scroll}
          snapToInterval={width}
          horizontal
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          // scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map(({ title }, i) => (
            <Slide key={i} right={!!(i % 2)} {...{ title }} />
          ))}
          {/* <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Eccentric" />
          <Slide label="Funky" right /> */}
        </Animated.ScrollView>
      </Animated.View>
      <Animated.View style={styles.footer}>
        <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
        <View style={[styles.footerContent]}>
          <View style={[styles.pagination]}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View style={{ flex: 1, flexDirection: 'row', width: width * slides.length, transform: [{ translateX: multiply(x, -1) }] }}>
            {slides.map(({ subtitle, description }, i) => {
              const last = i === slides.length - 1;

              return (
                <SubSlide
                  key={i}
                  onPress={() => {
                    if (last) {
                      navigation.navigate('Welcome');
                    } else {
                      scroll.current?.getNode().scrollTo({ x: width * (i + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, description, last }}
                />
              );
            })}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  slider: { height: SLIDE_HEIGHT, borderBottomRightRadius: theme.borderRadii.xl },
  footer: { flex: 1 },
  footerContent: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: theme.borderRadii.xl },
  pagination: {
    height: theme.borderRadii.xl,
    flexDirection: 'row',
    // backgroundColor: 'rgba(100, 200, 300, 0.5)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /*
  if there were pictures
  underlay: {
    ...StyleSheet.absoluteFillObject,
justifyContent: 'flex-end',
alignItems: 'center',
borderBottomRightRadius: theme.borderRadii.xl,
overflow: 'hidden',
  }, 
  picture: {
        // ...StyleSheet.absoluteFillObject,
        // borderBottomRightRadius: theme.borderRadii.xl,
  }
*/
});

export default Onboarding;
