import React from 'react';
import RoundedIcon, { RoundedIconProps } from './RoundedIcon';
import { Pressable } from 'react-native';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  // const iconSize = size * 0.8;
  return (
    <Pressable {...{ onPress }}>
      <RoundedIcon {...props} />
    </Pressable>
  );
};

export default RoundedIconButton;
