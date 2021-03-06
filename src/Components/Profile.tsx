import React, { ReactNode } from 'react';

import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { SubSection } from './SubSection';

type ProfileProps = {
 name: string;
 contact: ReactNode;
};

export const Profile: React.FC<ProfileProps> = ({ name, contact }) => {
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
      </Stack>
     </Flex>
    </Flex>
   </SubSection>
  </Flex>
 );
};
