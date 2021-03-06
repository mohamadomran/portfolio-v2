import {
 Box,
 Drawer,
 DrawerBody,
 DrawerContent,
 DrawerHeader,
 DrawerOverlay,
 IconButton,
 Stack,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';
import React from 'react';
import { FiX } from 'react-icons/fi';
import { NavItems } from './NavItems';

type NavDrawerProps = {
 isOpen: boolean;
 onClose: () => void;
};

export const NavDrawer: React.FC<NavDrawerProps> = ({ isOpen, onClose }) => {
 const theme = useTheme();
 const background = useColorModeValue(theme.colors.brand.pureWhite, theme.colors.brand.richBlack);
 const iconButtonColor = useColorModeValue(
  theme.colors.brand.crayolaBlue,
  theme.colors.brand.lavaRed,
 );

 const closeDrawer = () => {
  onClose();
 };

 return (
  <Drawer isOpen={isOpen} onClose={onClose} size="xs">
   <DrawerOverlay>
    <DrawerContent backgroundColor={background}>
     <DrawerHeader p={0}>
      <DrawerBody p={4}>
       <Box align="right">
        <IconButton
         aria-label="Close Menu"
         colorScheme={theme.colors.brand.lavaRed}
         icon={<FiX size="22px" color={iconButtonColor} />}
         variant="ghost"
         onClick={closeDrawer}
        />
       </Box>
       <Stack as="nav" p={4} spacing={4}>
        <NavItems />
       </Stack>
      </DrawerBody>
     </DrawerHeader>
    </DrawerContent>
   </DrawerOverlay>
  </Drawer>
 );
};
