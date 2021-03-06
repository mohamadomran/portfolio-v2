import React from 'react';
import { Flex, Button, Heading, Stack, Text, useColorModeValue, useTheme } from '@chakra-ui/react';

import { SectionListItem } from 'Components/SectionListItem';

type GithubRepoProsp = {
 name: string;
 url: string;
 description?: string;
 language: string;
};
export const GithubRepo: React.FC<GithubRepoProsp> = ({ name, url, language, description }) => {
 const theme = useTheme();

 const boxShadow = useColorModeValue('4px 4px 9px black', '4px 4px 9px black');

 const textColor = useColorModeValue('black', 'white');
 const buttonColor = useColorModeValue(theme.colors.brand.lavaRed, theme.colors.brand.lavaRed);
 const buttonTextColor = useColorModeValue('white', 'black');

 return (
  <SectionListItem>
   <Stack direction="column" spacing={0}>
    <Heading as="h3" size="md" fontFamily="JetBrains Mono" pb={2} color={textColor}>
     {name.toUpperCase()}
    </Heading>
    {description && (
     <Text color={textColor} pb={2} fontFamily="Jetbrains Mono">
      {description}
     </Text>
    )}
    <Text color={textColor} pb={2} fontFamily="Jetbrains Mono">
     {language}
    </Text>
    <Flex justify="space-between" align="flex-end" direction="row" wrap="wrap">
     <Flex direction="column">
      <Button
       as="a"
       href={url}
       target="_blank"
       rel="noopener"
       color={buttonTextColor}
       boxShadow={boxShadow}
       borderRadius={8}
       mt={5}
       background={buttonColor}>
       Go To Project
      </Button>
     </Flex>
    </Flex>
   </Stack>
  </SectionListItem>
 );
};
