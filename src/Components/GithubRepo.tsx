import React from 'react';
import { Flex, Button, Heading, Stack, Text, useColorModeValue, useTheme } from '@chakra-ui/react';

import { SectionListItem } from 'Components/SectionListItem';
import { FaArrowRight } from 'react-icons/fa';

type GithubRepoProps = {
 name: string;
 url: string;
 description?: string;
};
export const GithubRepo: React.FC<GithubRepoProps> = ({ name, url, description }) => {
 const theme = useTheme();

 const textColor = useColorModeValue(theme.colors.brand.richBlack, theme.colors.brand.pureWhite);
 const buttonColor = useColorModeValue(theme.colors.brand.crayolaBlue, theme.colors.brand.lavaRed);

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

    <Flex justify="space-between" align="flex-end" direction="row" wrap="wrap">
     <Flex direction="column">
      <Button
       as="a"
       my={4}
       size="md"
       borderRadius={8}
       colorScheme={buttonColor}
       rightIcon={<FaArrowRight size="1.1em" color={theme.colors.brand.pureWhite} />}
       href={url}
       target="_blank"
       rel="noopener"
       color={theme.colors.brand.pureWhite}
       fontFamily="Jetbrains Mono"
       backgroundColor={buttonColor}>
       Go To Project
      </Button>
     </Flex>
    </Flex>
   </Stack>
  </SectionListItem>
 );
};
