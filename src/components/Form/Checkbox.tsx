import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import { Box, Text } from '..';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  // const [{ value: checked }, , { setValue }] = useField(name);
  // const color = checked ? 'primary' : 'transparent';
  // const border = checked ? 'primary' : 'darkGray';
  return (
    <RectButton onPress={() => onChange()} activeOpacity={0}>
      <Box flexDirection="row" alignItems="center">
        <Box
          // backgroundColor={'transparent'}
          backgroundColor={checked ? 'primary' : 'white'}
          borderColor={'primary'}
          borderWidth={1}
          width={20}
          height={20}
          justifyContent="center"
          alignItems="center"
          borderRadius="s"
          marginRight="s"
        >
          <Icon name="check" size={14} color="white" />
        </Box>
        <Text variant={'button'}>{label}</Text>
      </Box>
    </RectButton>
  );
};

export default Checkbox;
