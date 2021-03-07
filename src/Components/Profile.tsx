import React, { ReactNode } from 'react';

import {
 Box,
 Button,
 Flex,
 Heading,
 Image,
 Stack,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';
import { FiFileText } from 'react-icons/fi';
import { SubSection } from './SubSection';

type ProfileProps = {
 name: string;
 contact: ReactNode;
};

export const Profile: React.FC<ProfileProps> = ({ name, contact }) => {
 const theme = useTheme();

 const boxShadow = useColorModeValue(
  `0px 4px 16px ${theme.colors.brand.crayolaBlue}`,
  `0px 4px 16px ${theme.colors.brand.lavaRed}`,
 );

 const background = useColorModeValue(theme.colors.brand.crayolaBlue, theme.colors.brand.lavaRed);

 return (
  <Flex align="center" justifyContent="center" wrap="wrap">
   <SubSection id="profile">
    <Flex align="center" justifyContent="center" wrap="wrap" pt={5}>
     <Box
      display="block"
      minW={{ base: '210px', sm: '210px', md: '230px' }}
      h="100%"
      align="center"
      py={45}>
      <Image
       w="80%"
       maxW="400px"
       src="images/profile.jpg"
       borderRadius={8}
       alt={`portrait of ${name}`}
      />
     </Box>
     <Flex
      direction="column"
      justifyContent="center"
      flexGrow={1}
      flexShrink={1}
      h="100%"
      px={{ base: 2, sm: 0, md: 0 }}
      py={{ sm: 4 }}>
      <Flex justifyContent="center">
       <Heading as="h1" size="4xl" fontFamily="JetBrains Mono">
        {name}
       </Heading>
      </Flex>

      <Stack aria-label="contact info" justifyContent="center" mt={5} direction="row" spacing={5}>
       {contact}
       <Button
        as="a"
        tabIndex={0}
        size="lg"
        borderRadius={8}
        colorScheme={background}
        leftIcon={<FiFileText size="1.1em" color={theme.colors.brand.pureWhite} />}
        href="https://drive.google.com/file/d/1NKSJoyCuH_yN6LKPcn1nPWDFWIluhX-7/view?usp=sharing"
        target="_blank"
        rel="noopener"
        boxShadow={boxShadow}
        color={theme.colors.brand.pureWhite}
        fontFamily="Jetbrains Mono"
        backgroundColor={background}>
        Resume
       </Button>
      </Stack>
     </Flex>
    </Flex>
   </SubSection>
  </Flex>
 );
};
