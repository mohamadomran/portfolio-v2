import React from 'react';
import { Button, useColorModeValue, useTheme } from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';

export const ResumeLink: React.FC = () => {
 const theme = useTheme();
 const boxShadow = useColorModeValue(
  `0px 4px 8px ${theme.colors.brand.crayolaBlue}`,
  `0px 4px 8px ${theme.colors.brand.lavaRed}`,
 );
 const backgroundColor = useColorModeValue(
  theme.colors.brand.crayolaBlue,
  theme.colors.brand.lavaRed,
 );

 return (
  <Button
   as="a"
   tabIndex={5}
   size="md"
   borderRadius={8}
   colorScheme={backgroundColor}
   leftIcon={<FiFileText size="1.1em" color={theme.colors.brand.pureWhite} />}
   href="https://drive.google.com/file/d/1NKSJoyCuH_yN6LKPcn1nPWDFWIluhX-7/view?usp=sharing"
   target="_blank"
   rel="noopener"
   boxShadow={boxShadow}
   color={theme.colors.brand.pureWhite}
   fontFamily="Jetbrains Mono"
   backgroundColor={backgroundColor}>
   Resume
  </Button>
 );
};
