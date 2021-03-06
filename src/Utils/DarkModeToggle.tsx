import React from 'react';
import {
 Box,
 IconButton,
 Tooltip,
 useColorMode,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

export const DarkModeToggle: React.FC = () => {
 const theme = useTheme();
 const { colorMode, toggleColorMode } = useColorMode();

 const label = useColorModeValue('Enable Dark Mode', 'Enable Light Mode');
 return (
  <Box>
   <Tooltip label={label} hasArrow>
    {colorMode === 'light' ? (
     <IconButton
      aria-label="enable dark mode"
      variant="ghost"
      colorScheme={theme.colors.brand.lavaRed}
      color="black"
      icon={<FiMoon />}
      onClick={toggleColorMode}
     />
    ) : (
     <IconButton
      aria-label="enable light mode"
      variant="ghost"
      colorScheme={theme.colors.brand.lavaRed}
      color="white"
      icon={<FiSun />}
      onClick={toggleColorMode}
     />
    )}
   </Tooltip>
  </Box>
 );
};
