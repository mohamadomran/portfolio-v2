import React from 'react';
import { IconButton, useColorModeValue, useTheme } from '@chakra-ui/react';

interface IconProps {
 label: string;
 link: string;
 icon: React.ReactElement;
}

export const Icon: React.FC<IconProps> = ({ label, link, icon }) => {
 const theme = useTheme();
 const boxShadow = useColorModeValue(
  '2px 2px 4px rgb(0 0 0 / 0.5)',
  '2px 2px 4px rgb(0 0 0 / 0.5)', // make it red
 );
 const iconColor = useColorModeValue(theme.colors.black, theme.colors.black);
 const background = useColorModeValue(theme.colors.red[500], theme.colors.red[500]);

 return (
  <IconButton
   as="a"
   aria-label={label}
   tabIndex={0}
   size="lg"
   color={iconColor}
   backgroundColor={background}
   href={link}
   target="_blank"
   rel="noopener"
   icon={icon}
   boxShadow={boxShadow}
  />
 );
};
