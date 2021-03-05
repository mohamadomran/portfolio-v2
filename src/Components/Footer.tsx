import React from 'react';
import { Box, Center, Stack, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
 return (
  <Box as="footer" p={{ base: 5, sm: 7 }}>
   <Center>
    <Stack align="center" direction="row" spacing={1}>
     <Text fontSize={['sm', 'lg']} fontFamily="JetBrains Mono">
      © Mohamad Omran {new Date().getFullYear()}
     </Text>
    </Stack>
   </Center>
  </Box>
 );
};
