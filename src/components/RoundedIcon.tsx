import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text, Theme } from './Theme';

interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}

const RoundedIcon = ({ name, size, color, backgroundColor }: RoundedIconProps) => {
  const iconSize = size * 0.8;
  return (
    <Box
      borderRadius={'m'}
      height={size}
      width={size}
      // backgroundColor={!error ? 'primary' : 'danger'}
      alignItems="center"
      justifyContent={'center'}
      marginRight={'s'}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <>
          <Icon size={16} style={{ textAlign: 'center' }} {...{ name }} />
        </>
      </Text>
    </Box>
  );
};

export default RoundedIcon;
