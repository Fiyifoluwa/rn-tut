import * as React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import { LoadAssets, theme } from './src/components';

import { AuthNavigator } from './src/Auth';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const fonts = {
  'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  'SFProDisplay-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),
  'SFProDisplay-Semibold': require('./assets/fonts/SFProDisplay-Semibold.ttf'),
  'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
};

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <SafeAreaProvider>
          <AuthNavigator />
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
