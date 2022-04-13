import React from 'react';

import { Box, Button, Container, Text } from '../../components';
import SocialLogin from '../components/SocialLogin';
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'Password must be at least 8 characters'),
});

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems={'center'}>
        <Button
          variant="transparent"
          onPress={() => {
            alert('Signup');
          }}
        >
          <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
            <Text color={'white'}>Don't have an account?</Text>
            <Text style={{ marginLeft: 5 }} variant="button" color={'primary'}>
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
  return (
    <Container {...{ footer }}>
      <Box padding={'xl'}>
        <Text variant={'title1'} textAlign={'center'} marginBottom={'l'}>
          Welcome back!
        </Text>
        <Text variant={'body'} style={{ opacity: 0.5 }} textAlign={'center'} marginBottom={'l'}>
          Use your credentials below and login to your account
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
            remember: false,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={ValidationSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched, values }) => (
            <Box>
              <Box mb={'s'}>
                <TextInput
                  icon="mail"
                  placeholder="Enter your Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <Box mb={'s'}>
                <TextInput
                  icon="lock"
                  placeholder="Enter your password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  error={errors.password}
                  touched={touched.password}
                />
              </Box>
              <Box flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Checkbox label="Remember me" checked={values.remember} onChange={() => setFieldValue('remember', !values.remember)} />
                <Text onPress={() => true} color={'primary'}>
                  Forgot password
                </Text>
              </Box>
              <Box alignItems={'center'} marginTop={'m'}>
                <Button variant="primary" label="Log into your account" onPress={handleSubmit} />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Login;
