import React from 'react';
import {
 Flex,
 Button,
 Heading,
 Stack,
 Tag,
 Text,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

import { SectionListItem } from 'Components/SectionListItem';

type ProjectProps = {
 title: string;
 link: string;
 tech?: string[];
 description: string;
};

export const Project: React.FC<ProjectProps> = ({ title, link, tech, description }) => {
 const theme = useTheme();

 const textColor = useColorModeValue(theme.colors.brand.richBlack, theme.colors.brand.pureWhite);
 const buttonColor = useColorModeValue(theme.colors.brand.crayolaBlue, theme.colors.brand.lavaRed);

 return (
  <SectionListItem>
   <Stack direction="column" spacing={0}>
    <Heading as="h3" size="md" fontFamily="JetBrains Mono" pb={2} color={textColor}>
     {title}
    </Heading>
    <Text color={textColor} pb={2} fontFamily="Jetbrains Mono">
     {description}
    </Text>
    <Flex justify="space-between" align="flex-end" direction="row" wrap="wrap">
     <Flex as="ul" aria-label="technologies used" direction="row" wrap="wrap" w="80%">
      {tech?.map(tag => (
       <Tag
        as="li"
        size="lg"
        key={tag}
        color={theme.colors.brand.richBlack}
        mr={2}
        mt={2}
        maxH={1}
        fontFamily="Jetbrains Mono"
        backgroundColor={theme.colors.brand.maizeYellow}>
        {tag}
       </Tag>
      ))}
     </Flex>
     <Flex direction="column">
      <Button
       as="a"
       my={4}
       size="md"
       borderRadius={8}
       colorScheme={buttonColor}
       rightIcon={<FaArrowRight size="1.1em" color={theme.colors.brand.pureWhite} />}
       href={link}
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
