import React, { ReactNode } from 'react';
import Svg, { G, Rect, Path } from 'react-native-svg';
import { Box } from '../../components';

interface SocialIconProps {
  children: ReactNode;
}

const Facebook = () => (
  <Svg width={44} height={44} viewBox="0 0 44 44">
    <G data-name="Group 1">
      <G data-name="Icons/icon-facebook">
        <Rect width={44} height={44} rx={22} fill="#f6f6f6" />
        <Path
          d="M23.067 31v-8.211h2.756l.413-3.2h-3.169v-2.042c0-.926.257-1.558 1.586-1.558h1.695v-2.863a22.651 22.651 0 00-2.47-.126 3.856 3.856 0 00-4.115 4.23v2.36H17v3.2h2.763V31z"
          fill="#3c5a99"
        />
      </G>
    </G>
  </Svg>
);

const Google = () => (
  <Svg data-name="Icons/icon-google" width={44} height={44} viewBox="0 0 44 44">
    <Rect width={44} height={44} rx={22} fill="#f6f6f6" />
    <Path
      d="M31.767 22.209a11.777 11.777 0 00-.174-2.038h-9.476v3.862h5.427a4.642 4.642 0 01-2.009 3.048v2.506h3.238a9.787 9.787 0 002.994-7.378z"
      fill="#4285f4"
    />
    <Path
      data-name="Path"
      d="M22.07 32a9.641 9.641 0 006.662-2.417l-3.243-2.501a6.029 6.029 0 01-3.419.956 6.014 6.014 0 01-5.639-4.131h-3.342v2.579A10.055 10.055 0 0022.07 32z"
      fill="#34a853"
    />
    <Path data-name="Path" d="M16.436 23.963a5.986 5.986 0 010-3.849v-2.589h-3.36a10.005 10.005 0 000 9.027z" fill="#fbbc04" />
    <Path
      data-name="Path"
      d="M22.078 15.961a5.482 5.482 0 013.859 1.5l2.872-2.861a9.7 9.7 0 00-6.731-2.6 10.063 10.063 0 00-8.989 5.516l3.341 2.577a6.013 6.013 0 015.648-4.132z"
      fill="#ea4335"
    />
  </Svg>
);

const Apple = () => (
  <Svg data-name="Icons/icon-apple" width={44} height={44} viewBox="0 0 44 44">
    <Rect width={44} height={44} rx={22} fill="#f6f6f6" />
    <Path
      fill="#000"
      d="M16.716 30.193a10.365 10.365 0 01-1.486-1.733 11.9 11.9 0 01-1.57-3.043A10.9 10.9 0 0113 21.79a6.494 6.494 0 01.892-3.465 5.195 5.195 0 014.392-2.537 6.077 6.077 0 011.953.443 6.392 6.392 0 001.55.445 9.414 9.414 0 001.713-.524 5.817 5.817 0 012.335-.4 4.994 4.994 0 013.884 1.994 4.2 4.2 0 00-2.29 3.827 4.172 4.172 0 001.421 3.182 4.687 4.687 0 001.42.909c-.114.322-.234.631-.362.927a10.864 10.864 0 01-1.1 1.933 9.877 9.877 0 01-1.42 1.674 2.787 2.787 0 01-1.825.784 4.678 4.678 0 01-1.687-.392 4.936 4.936 0 00-1.814-.391 5.1 5.1 0 00-1.867.391 5.128 5.128 0 01-1.612.41H18.5a2.673 2.673 0 01-1.784-.807zm4.943-14.466a3.009 3.009 0 01-.023-.38 4.327 4.327 0 011.19-2.828 4.558 4.558 0 011.448-1.061A4.4 4.4 0 0125.932 11a3.524 3.524 0 01.022.4 4.206 4.206 0 01-1.121 2.8 3.961 3.961 0 01-2.933 1.536q-.119 0-.241-.009z"
    />
  </Svg>
);

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box marginHorizontal={'s'} backgroundColor={'white'} width={44} height={44} borderRadius={'l'} justifyContent={'center'} alignItems={'center'}>
      {children}
    </Box>
  );
};

const SocialLogin = () => {
  return (
    <Box flexDirection={'row'} justifyContent={'center'}>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Apple />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;
