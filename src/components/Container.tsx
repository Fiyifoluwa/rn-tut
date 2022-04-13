import { Dimensions, Image, StyleSheet, StatusBar } from 'react-native';
import React, { ReactNode } from 'react';
import theme, { Box } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const aspectRatio = 250 / 375;
const height = width * aspectRatio;
export const assets = [require('../../assets/patterns/0.png')];

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle={'light-content'} />
      <Box backgroundColor={'white'}>
        <Box borderBottomLeftRadius="xl" overflow={'hidden'} height={height * 0.61}>
          <Image source={assets[0]} style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
        </Box>
      </Box>

      <Box flex={1} overflow={'hidden'}>
        <Image source={assets[0]} style={{ ...StyleSheet.absoluteFillObject, width, height, top: -height * 0.61 }} />
        <Box borderRadius={'xl'} borderTopLeftRadius={'zero'} flex={1} backgroundColor={'white'}>
          {children}
        </Box>
      </Box>
      <Box backgroundColor={'secondary'} paddingTop={'m'}>
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};

export default Container;

const styles = StyleSheet.create({});
