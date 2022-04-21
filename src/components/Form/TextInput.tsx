import { StyleSheet, TextInput as Input, TextInputProps as InputProps } from 'react-native';
import React, { forwardRef } from 'react';
import { Box } from '..';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../Theme';

interface TextInputProps extends InputProps {
  icon?: string | undefined;
  touched?: boolean;
  error?: string;
  hideContainer?: boolean;
}

const TextInput = forwardRef<Input, TextInputProps>(({ icon, touched, error, hideContainer, ...props }, ref) => {
  const theme = useTheme<Theme>();
  const reColor = !touched ? 'text' : error ? 'danger' : 'primary';
  const color = theme.colors[reColor];
  const SIZE = theme.borderRadii.m * 2;

  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      height={hideContainer ? 0 : 48}
      borderRadius={'s'}
      borderColor={reColor}
      borderWidth={hideContainer ? 0 : StyleSheet.hairlineWidth}
    >
      <Box padding={'s'}>
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <Input
        underlineColorAndroid={'transparent'}
        placeholderTextColor={color}
        style={{ flex: 1, paddingVertical: 12, paddingHorizontal: 5 }}
        {...props}
        {...{ ref }}
      />
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
          <Icon name={!error ? 'check' : 'x'} size={16} color={'white'} style={{ textAlign: 'center' }} />
        </Box>
      )}
    </Box>
  );
});

export default TextInput;
