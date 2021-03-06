import React, { ReactNode } from 'react';
import { Box, Flex, Heading, Stack, useColorModeValue, useTheme } from '@chakra-ui/react';
import { SubSection } from './SubSection';

type AboutProps = {
 children?: ReactNode;
};

export const About: React.FC<AboutProps> = ({ children }) => {
 const theme = useTheme();

 const boxShadow = useColorModeValue(theme.shadows.boxLight, theme.shadows.boxDark);
 const headerColor = useColorModeValue(theme.colors.brand.richBlack, theme.colors.brand.pureWhite);
 const background = useColorModeValue(theme.colors.brand.pureWhite, theme.colors.brand.richBlack);
 const textColor = useColorModeValue(theme.colors.brand.richBlack, theme.colors.brand.pureWhite);

 return (
  <SubSection id="about">
   <Flex direction="column" wrap="wrap">
    <Box
     display="block"
     minW={{ base: '210px', sm: '210px', md: '230px' }}
     h="100%"
     align="left"
     fontFamily="JetBrains Mono"
     py={8}>
     <Heading fontSize={['4xl', '5xl']} color={headerColor} fontFamily="JetBrains Mono">
      About Me
     </Heading>
    </Box>
    <Stack
     align="start"
     flexGrow={1}
     flexShrink={1}
     flexBasis={0}
     color={textColor}
     p={{ base: 4, sm: 8, md: 8, lg: 10 }}
     boxShadow={boxShadow}
     borderRadius={8}
     fontSize={[14, 20]}
     lineHeight={8}
     fontFamily="JetBrains Mono"
     backgroundColor={background}>
     {children}
    </Stack>
   </Flex>
  </SubSection>
 );
};
