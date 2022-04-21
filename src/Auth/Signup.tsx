import React, { useRef } from 'react';

import { Box, Button, Container, Text } from '../components';
import TextInput from '../components/Form/TextInput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Footer from './components/Footer';
import { AppRoutes, StackNavigationProps } from '../components/Navigation';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
  passwordConfirm: Yup.string()
    .required('Required')
    .min(8, 'Password must be at least 8 characters')
    .equals([Yup.ref('password')], 'Passwords must match'),
});

const Signup = ({ navigation }: StackNavigationProps<AppRoutes, 'Signup'>) => {
  const footer = <Footer title={'Already have an account?'} action={'Login here'} onPress={() => navigation.navigate('Login')} />;

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: ValidationSchema,
  });

  const passwordRef = useRef<typeof TextInput>(null);
  const passwordConfirmRef = useRef<typeof TextInput>(null);

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding={'xl'}>
        <Text variant={'title1'} textAlign={'center'} marginBottom={'l'}>
          Create account!
        </Text>
        <Text variant={'body'} style={{ opacity: 0.5 }} textAlign={'center'} marginBottom={'l'}>
          Signup and find the best items to spice up your style
        </Text>
        <Box>
          <Box mb={'m'}>
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
              autoCapitalize="none"
              textContentType="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => passwordConfirmRef.current?.focus()}
            />
          </Box>
          <TextInput hideContainer editable={false} />
          <Box mb={'m'}>
            <TextInput
              ref={passwordConfirmRef}
              icon="lock"
              placeholder="Confirm your password"
              onChangeText={handleChange('passwordConfirm')}
              onBlur={handleBlur('passwordConfirm')}
              error={errors.passwordConfirm}
              touched={touched.passwordConfirm}
              secureTextEntry
              autoCapitalize="none"
              textContentType="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>

          <Box alignItems={'center'} marginTop={'l'}>
            <Button variant="primary" label="Create your account" onPress={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
