import React, { useRef } from 'react';

import { Box, Button, Container, Text } from '../components';
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { AppRoutes, StackNavigationProps } from '../components/Navigation';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
});

const Login = ({ navigation }: StackNavigationProps<AppRoutes, 'Login'>) => {
  const footer = <Footer title={"Don't have an account?"} action={'Sign Up here'} onPress={() => navigation.navigate('Signup')} />;

  const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: (values) => console.log(values),
    validationSchema: ValidationSchema,
  });

  const passwordRef = useRef<typeof TextInput>(null);

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding={'xl'}>
        <Text variant={'title1'} textAlign={'center'} marginBottom={'l'}>
          Welcome back!
        </Text>
        <Text variant={'body'} style={{ opacity: 0.5 }} textAlign={'center'} marginBottom={'l'}>
          Use your credentials below and login to your account
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
              returnKeyType="next"
              returnKeyLabel="next"
              keyboardType="email-address"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          </Box>
          <Box mb={'m'}>
            <TextInput
              ref={passwordRef}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCompleteType="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Checkbox label="Remember me" checked={values.remember} onChange={() => setFieldValue('remember', !values.remember)} />
            <Text onPress={() => navigation.navigate('ForgotPassword')} color={'primary'}>
              Forgot password
            </Text>
          </Box>
          <Box alignItems={'center'} marginTop={'l'}>
            <Button variant="primary" label="Log into your account" onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
