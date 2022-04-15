import { Dimensions, Image, StyleSheet, Platform } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, useTheme } from './Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Constants from 'expo-constants';

const { width, height: wHeight } = Dimensions.get('window');
const aspectRatio = 250 / 375;
const height = width * aspectRatio;
export const assets = [require('../../assets/patterns/0.png')];

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
}

const Container = ({ children, footer }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
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
    </KeyboardAwareScrollView>
  );
};

export default Container;

const styles = StyleSheet.create({});
