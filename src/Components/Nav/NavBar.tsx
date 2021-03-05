import React, { useState } from 'react';
import {
 Box,
 Text,
 IconButton,
 Spacer,
 Stack,
 useColorModeValue,
 useDisclosure,
 useTheme,
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { useWindowSize } from '../../Hooks/useWindowSize';
import { NavLink } from './NavLink';
import { ResumeLink } from './ResumeLink';
import { NavDrawer } from './NavDrawer';
import { DarkModeToggle } from 'Utils/DarkModeToggle';

type NavBarProps = {};

export const NavItems: React.FC = () => {
 return (
  <>
   <NavLink target="about" style="text">
    <Text fontFamily="Jetbrains Mono">About</Text>
   </NavLink>
   <NavLink target="experience" style="text">
    <Text fontFamily="Jetbrains Mono">Experience</Text>
   </NavLink>
   <NavLink target="projects" style="text">
    <Text fontFamily="Jetbrains Mono">Projects</Text>
   </NavLink>
  </>
 );
};

export const NavBar: React.FC<NavBarProps> = () => {
 const theme = useTheme();
 const initialShadow = useColorModeValue('none', 'lg');
 const [boxShadow, setBoxShadow] = useState(initialShadow);
 const backgroundColor = useColorModeValue(theme.colors.white, theme.colors.dark.background.card);
 const iconButtonColor = useColorModeValue(theme.colors.black, theme.colors.white);
 const { isOpen, onOpen, onClose } = useDisclosure();
 const windowSize = useWindowSize();

 const handleScroll = () => {
  return window.scrollY > 20 ? setBoxShadow('lg') : setBoxShadow(initialShadow);
 };

 React.useEffect(() => {
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
   transitionDuration="0.25s">
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
       colorScheme={theme.colors.red[500]}
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
