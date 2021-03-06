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
  `0px 4px 16px ${theme.colors.brand.crayolaBlue}`,
  `0px 4px 16px ${theme.colors.brand.lavaRed}`,
 );

 const background = useColorModeValue(theme.colors.brand.crayolaBlue, theme.colors.brand.lavaRed);

 return (
  <IconButton
   as="a"
   aria-label={label}
   tabIndex={0}
   size="lg"
   color={theme.colors.brand.pureWhite}
   backgroundColor={background}
   href={link}
   target="_blank"
   rel="noopener"
   icon={icon}
   boxShadow={boxShadow}
  />
 );
};
