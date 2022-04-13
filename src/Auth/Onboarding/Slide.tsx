import { View, Dimensions, StyleSheet } from 'react-native';
import React, { FC } from 'react';

import { Text } from '../../components';

interface SlideProps {
  title: string;
  right?: boolean;
  /*
  if there were pictures
  picture: {
    src: ImageRequireSource;,
    width: number,
    height: number
  }
*/
}

const { width, height } = Dimensions.get('window');

export const SLIDE_HEIGHT = 0.61 * height;

export const Slide: FC<SlideProps> = ({ title, right }) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? '-90deg' : '90deg' },
  ];
  return (
    <View style={styles.container}>
      {/* // if there were pictures
<View style={styles.underlay}>
<Image source={picture.src} style={[styles.picture, { width: width - BORDER_RADIUS , height: (width - BORDER_RADIUS) * (picture.height/picture.width) }]} /> 
</View>
      */}
      <View style={[styles.titleContainer, { transform }]}>
        <Text variant={'hero'}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width },
  title: {
    fontSize: 80,
    lineHeight: 80,
    fontFamily: 'SFProDisplay-Bold',
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  /*
  if there were pictures
  underlay: {
    ...StyleSheet.absoluteFillObject,
justifyContent: 'flex-end',
alignItems: 'center',
  }, 
  picture: {
        // ...StyleSheet.absoluteFillObject,
        // borderBottomRightRadius: BORDER_RADIUS,
  }
*/
});
