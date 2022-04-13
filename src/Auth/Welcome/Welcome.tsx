import { StyleSheet } from 'react-native';
import React from 'react';
import { Box, Button, Text } from '../../components';
import { AppRoutes, StackNavigationProps } from '../../components/Navigation';

// const picture = {
//   src: require('../../assets/images/onboarding-1.png'),
//   width: 3383,
//   height: 5074
// }

// const { width, height } = Dimensions.get('window');

const Welcome = ({ navigation }: StackNavigationProps<AppRoutes, 'Welcome'>) => {
  return (
    <Box flex={1} backgroundColor={'white'}>
      <Box flex={1} borderBottomRightRadius={'xl'} backgroundColor={'grey'} alignItems={'center'} justifyContent={'flex-end'}>
        {/* <Image
          source={picture.src}
          style={[styles.picture, { width: width - BORDER_RADIUS, height: (width - BORDER_RADIUS) * (picture.height / picture.width) }]}
        /> */}
      </Box>
      <Box flex={1} borderTopLeftRadius={'xl'}>
        <Box backgroundColor={'grey'} position={'absolute'} top={0} left={0} right={0} bottom={0} />
        <Box backgroundColor={'white'} borderTopLeftRadius={'xl'} flex={1} justifyContent={'space-evenly'} alignItems={'center'} padding={'xl'}>
          <Text variant={'title2'}>Let's get started</Text>
          <Text variant={'body'} textAlign={'center'}>
            Login to your account below or signup for an amazing experience
          </Text>

          <Button variant={'primary'} label={'Have an account? Login'} onPress={() => navigation.navigate('Login')} />
          <Button label={"Join us, it's free"} />
          <Button variant="transparent" label={'Forgot password?'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
