import React, { useState, useEffect } from 'react';
import {
 Box,
 IconButton,
 Spacer,
 Stack,
 useColorModeValue,
 useDisclosure,
 useTheme,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';

import { useWindowSize } from 'Hooks/useWindowSize';
import { DarkModeToggle } from 'Utils/DarkModeToggle';

import { ResumeLink } from './ResumeLink';
import { NavDrawer } from './NavDrawer';
import { NavItems } from './NavItems';

export const NavBar: React.FC = () => {
 const theme = useTheme();
 const initialShadow = useColorModeValue('none', 'lg');
 const [, setBoxShadow] = useState(initialShadow);

 const backgroundColor = useColorModeValue(
  theme.colors.brand.pureWhite,
  theme.colors.brand.richBlack,
 );
 const iconButtonColor = useColorModeValue(
  theme.colors.brand.crayolaBlue,
  theme.colors.brand.lavaRed,
 );
 const boxShadow = useColorModeValue(
  `0px 4px 16px ${theme.colors.brand.crayolaBlue}`,
  `0px 4px 16px ${theme.colors.brand.lavaRed}`,
 );

 const { isOpen, onOpen, onClose } = useDisclosure();
 const windowSize = useWindowSize();

 const handleScroll = () => {
  return window.scrollY > 20 ? setBoxShadow('lg') : setBoxShadow(initialShadow);
 };

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
 }, []);

 return (
  <Box
   as="header"
   w="100%"
   backgroundColor={backgroundColor}
   position="fixed"
   top={0}
   zIndex={1}
   boxShadow={boxShadow}
   transition="ease"
   transitionDuration="0.15s">
   <Box maxW={theme.sizes.width} p={0} mx="auto">
    {windowSize.width! > 750 ? (
     <Stack direction="row" align="center" px={10} py={4} spacing={5}>
      <Spacer />
      <Stack as="nav" align="center" direction="row" spacing={3}>
       <NavItems />
      </Stack>
      <ResumeLink />
      <DarkModeToggle />
     </Stack>
    ) : (
     <Stack direction="row" align="center" px={{ base: 5, sm: 5, md: 10 }} py={4}>
      <Spacer />
      <DarkModeToggle />
      <IconButton
       tabIndex={0}
       aria-label="Open Menu"
       width="40px"
       borderRadius="10px"
       colorScheme={iconButtonColor}
       icon={<FiMenu size="22px" color={iconButtonColor} />}
       variant="ghost"
       onClick={onOpen}
      />
      <NavDrawer isOpen={isOpen} onClose={onClose} />
     </Stack>
    )}
   </Box>
  </Box>
 );
};
