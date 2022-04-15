import React from 'react';
import SocialLogin from './SocialLogin';
import { Box, Text } from '../../components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems={'center'} marginTop={'m'}>
        <TouchableWithoutFeedback
          // variant="transparent"
          {...{ onPress }}
        >
          <Text color={'white'} variant="button">
            <Text color={'white'}>{`${title} `}</Text>
            <Text style={{ marginLeft: 5 }} variant="button" color={'primary'}>
              {action}
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};

export default Footer;
