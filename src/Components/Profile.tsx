import React, { ReactNode } from 'react';

import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import { SubSection } from './SubSection';

type ProfileProps = {
 name: string;
 contact: ReactNode;
};

export const Profile: React.FC<ProfileProps> = ({ name, contact }) => {
 return (
  <SubSection id="profile">
   <Flex align="center" justify="flex-start" wrap="wrap" pt={5}>
    <Box
     display="block"
     minW={{ base: '210px', sm: '210px', md: '230px' }}
     h="100%"
     align="left"
     px={{ base: 2, sm: 0 }}
     py={5}>
     <Image
      w="80%"
      maxW="200px"
      src="images/profile.jpg"
      borderRadius="full"
      alt={`portrait of ${name}`}
     />
    </Box>
    <Flex
     direction="column"
     flexGrow={1}
     flexShrink={1}
     flexBasis={0}
     minW="60%"
     h="100%"
     px={{ base: 2, sm: 0, md: 0 }}
     py={{ base: 5, sm: 8 }}>
     <Heading as="h1" size="4xl" fontFamily="JetBrains Mono">
      {name}
     </Heading>

     <Stack aria-label="contact info" alignItems="center" mt={5} direction="row" spacing={5}>
      {contact}
     </Stack>
    </Flex>
   </Flex>
  </SubSection>
 );
};
