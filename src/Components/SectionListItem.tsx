import React, { ReactNode } from 'react';
import { Stack, useColorModeValue, useTheme } from '@chakra-ui/react';

interface SectionListItemProps {
 children?: ReactNode;
}

export const SectionListItem: React.FC<SectionListItemProps> = ({ children }) => {
 const theme = useTheme();
 const boxShadow = useColorModeValue(theme.shadows.boxLight, theme.shadows.boxDark);
 const background = useColorModeValue(theme.colors.brand.pureWhite, theme.colors.brand.richBlack);

 return (
  <Stack
   as="li"
   w="100%"
   p={{ base: '1rem', sm: 8, md: 8, lg: 10 }}
   boxShadow={boxShadow}
   borderRadius={8}
   backgroundColor={background}>
   {children}
  </Stack>
 );
};
