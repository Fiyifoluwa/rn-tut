import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import {assets as onboardingAssets} from './src/assets';
// import {assets as welcomeAssets} from './src/assets';
export { default as Onboarding } from './Onboarding';
export { default as Welcome } from './Welcome';
// export const assets = [...onboardingAssets, ...welcomeAssets];

import { AppRoutes } from '../components/Navigation';
import Onboarding from './Onboarding';
import Welcome from './Welcome';
import Login from './Login';

const AuthStack = createNativeStackNavigator<AppRoutes>();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
