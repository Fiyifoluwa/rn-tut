import React from 'react';

import { Box, Button, Container, Text } from '../components';
import TextInput from '../components/Form/TextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { AppRoutes, StackNavigationProps } from '../components/Navigation';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const ForgotPassword = ({ navigation }: StackNavigationProps<AppRoutes, 'ForgotPassword'>) => {
  const footer = <Footer title={"Didn't work?"} action={'Try another way'} onPress={() => true} />;

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: () => navigation.navigate('ConfirmPasswordReset'),
    validationSchema: ValidationSchema,
  });

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding={'xl'} justifyContent={'center'} flex={1}>
        <Text variant={'title1'} textAlign={'center'} marginBottom={'l'}>
          Forgot password?
        </Text>
        <Text variant={'body'} style={{ opacity: 0.5 }} textAlign={'center'} marginBottom={'l'}>
          Enter the email address associated with your account
        </Text>
        <Box>
          <Box mb={'s'}>
            <TextInput
              icon="mail"
              placeholder="Enter your Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="done"
              returnKeyLabel="done"
              keyboardType="email-address"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems={'center'} marginTop={'l'}>
            <Button variant="primary" label="Reset password" onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
