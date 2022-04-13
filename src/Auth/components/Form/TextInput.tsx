import { StyleSheet, TextInput as Input, TextInputProps as InputProps } from 'react-native';
import React, { useState } from 'react';
import { Box, theme } from '../../../components';
import { Feather as Icon } from '@expo/vector-icons';

interface TextInputProps extends InputProps {
  icon?: string;
  touched?: boolean;
  error?: string;
}

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({ icon, touched, error, ...props }: TextInputProps) => {
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];

  return (
    <Box flexDirection={'row'} alignItems={'center'} height={48} borderRadius={'s'} borderColor={reColor} borderWidth={StyleSheet.hairlineWidth}>
      <Box padding={'s'}>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Input underlineColorAndroid={'transparent'} placeholderTextColor={color} {...props} style={{ flex: 1 }} />
      {touched && (
        <Box
          borderRadius={'m'}
          height={SIZE}
          width={SIZE}
          backgroundColor={!error ? 'primary' : 'danger'}
          alignItems="center"
          justifyContent={'center'}
          marginRight={'s'}
        >
          <Icon name={!error ? 'check' : 'x'} size={12} color={'white'} />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
