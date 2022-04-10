import { View, StyleSheet, Dimensions } from 'react-native';
import React, { FC, useRef } from 'react';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { divide, multiply } from 'react-native-reanimated';

import { Slide, SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';

interface OnboardingProps {}

const { width } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const slides = [
  { title: 'Relaxed', subtitle: 'Find Your Outfits', description: "Confused about your outfit? Don't worry! Find the best outfit here!", color: '#BFEAF5' },
  {
    title: 'Playful',
    subtitle: 'Hear it First, Wear it First',
    description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ideas',
    color: '#BEECC4',
  },
  { title: 'Eccentric', subtitle: 'Your Style, Your Way', description: 'Create your individual & unique style and look amazing everyday', color: '#FFE4D9' },
  { title: 'Funky', subtitle: 'Look Good, Feel Good', description: 'Discover the latest trends in fashion and explore your personality', color: '#FFDDDD' },
];

const Onboarding: FC<OnboardingProps> = () => {
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
            {slides.map(({ subtitle, description }, i) => (
              <SubSlide
                key={i}
                onPress={() => scroll.current && scroll.current.getNode().scrollTo({ x: width * (i + 1), animated: true })}
                last={i === slides.length - 1}
                {...{ subtitle, description }}
              />
            ))}
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  slider: { height: SLIDE_HEIGHT, borderBottomRightRadius: BORDER_RADIUS },
  footer: { flex: 1 },
  footerContent: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: BORDER_RADIUS },
  pagination: {
    height: BORDER_RADIUS,
    flexDirection: 'row',
    // backgroundColor: 'rgba(100, 200, 300, 0.5)',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Onboarding;
