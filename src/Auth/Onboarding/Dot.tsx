import React from 'react';
import Animated, { interpolate } from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
}

const Dot = ({ index, currentIndex }: DotProps) => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25, 1],
    extrapolate: 'clamp',
  });
  return <Animated.View style={{ backgroundColor: '#2CB9B0', width: 8, height: 8, borderRadius: 4, margin: 4, opacity, transform: [{ scale }] }} />;
};

export default Dot;
