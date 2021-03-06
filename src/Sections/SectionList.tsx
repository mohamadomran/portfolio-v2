import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Stack, useColorModeValue, useTheme } from '@chakra-ui/react';
import { SubSection } from './SubSection';

type SectionListProps = {
 children?: ReactNode;
 heading: string;
 id: string;
};

export const SectionList: React.FC<SectionListProps> = ({ children, id, heading }) => {
 const theme = useTheme();
 const headerColor = useColorModeValue(
  theme.colors.dark.text.secondary,
  theme.colors.brand.platinumWhite,
 );

 return (
  <SubSection id={id}>
   <Flex direction="column" alignItems="stretch" justify="flex-start" wrap="wrap">
    <Box
     display="block"
     minW={{ base: '210px', sm: '210px', md: '230px' }}
     h="100%"
     align="left"
     px={{ base: 2, sm: 0 }}
     py={5}>
     <Heading fontSize="3xl" color={headerColor} fontFamily="JetBrains Mono">
      {heading}
     </Heading>
    </Box>
    <Stack
     as="ul"
     align="start"
     flexGrow={1}
     flexShrink={1}
     flexBasis={0}
     minW="60%"
     h="100%"
     spacing={5}>
     {children}
    </Stack>
   </Flex>
  </SubSection>
 );
};
