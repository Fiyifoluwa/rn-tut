import React from 'react';
import { Box, Button, Container, Text, CloseButton } from '../components';
import { Feather as Icon } from '@expo/vector-icons';

import { AppRoutes, StackNavigationProps } from '../components/Navigation';

const ConfirmPasswordReset = ({ navigation }: StackNavigationProps<AppRoutes, 'ConfirmPasswordReset'>) => {
  const footer = <CloseButton onPress={() => navigation.pop()} />;
  // const footer = true;

  return (
    <Container {...{ footer }}>
      <Box padding={'xl'} justifyContent={'center'} flex={1}>
        <Box alignItems={'center'} alignSelf={'center'} borderRadius={'xl'} marginBottom={'l'} padding={'m'} backgroundColor={'primaryLight'}>
          <Icon name="check" size={24} color={'rgb(44,185,176)'} />
        </Box>
        <Text variant={'title1'} textAlign={'center'} marginBottom={'l'}>
          Your password was successfully changed
        </Text>
        <Text variant={'body'} style={{ opacity: 0.5 }} textAlign={'center'} marginBottom={'l'}>
          Close this window and login again
        </Text>
        <Box alignItems={'center'} marginTop={'l'}>
          <Button variant="primary" label="Login again" onPress={() => navigation.navigate('Login')} />
        </Box>
      </Box>
    </Container>
  );
};

export default ConfirmPasswordReset;
