import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../../../public/animations/24117-hub-computer.json';

import { LogoContent } from './styles';

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Logo: React.FC = () => {
  return (
    <LogoContent>
      <Lottie options={defaultLottieOptions} width={250} height={75} />
    </LogoContent>
  );
};

export default Logo;
