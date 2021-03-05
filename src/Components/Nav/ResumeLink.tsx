import React from 'react';
import { Button, useColorModeValue, useTheme } from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';

export const ResumeLink: React.FC = () => {
 const theme = useTheme();
 const boxShadow = useColorModeValue('4px 4px 9px #c9c9c9', '3px 3px 6px #000');
 const backgroundColor = useColorModeValue(theme.colors.red[500], theme.colors.red[500]);
 const color = useColorModeValue('white', 'black');

 return (
  <Button
   as="a"
   tabIndex={0}
   size="md"
   borderRadius={8}
   colorScheme={theme.colors.red[500]}
   leftIcon={<FiFileText size="1.1em" color={color} />}
   href="https://drive.google.com/file/d/1NKSJoyCuH_yN6LKPcn1nPWDFWIluhX-7/view?usp=sharing"
   target="_blank"
   rel="noopener"
   boxShadow={boxShadow}
   color={color}
   fontFamily="Jetbrains Mono"
   backgroundColor={backgroundColor}>
   Resume
  </Button>
 );
};
