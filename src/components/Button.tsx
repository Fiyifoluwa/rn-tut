import { StyleSheet } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { useTheme } from '@shopify/restyle';
import { Theme } from './Theme';
import { Text } from '../components';

interface ButtonProps {
  variant: 'default' | 'primary' | 'transparent';
  label?: string;
  onPress: () => void;
  children?: React.ReactNode;
}

const Button = ({ variant, label, onPress, children }: ButtonProps) => {
  const theme = useTheme<Theme>();

  const backgroundColor = variant === 'primary' ? theme.colors.primary : variant === 'transparent' ? 'transparent' : theme.colors.grey;
  const color = variant === 'primary' ? theme.colors.white : theme.colors.secondary;

  return (
    <RectButton style={[styles.container, { backgroundColor }]} {...{ onPress }}>
      {children ? (
        children
      ) : (
        <Text variant="button" style={{ color }}>
          {label}
        </Text>
      )}
    </RectButton>
  );
};

Button.defaultProps = {
  variant: 'default',
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 15,
    color: '#F4F5F8',
    textAlign: 'center',
  },
});
