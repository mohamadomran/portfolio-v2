import React from 'react';
import {
 Button,
 Flex,
 Heading,
 Stack,
 Tag,
 Text,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';

import { SectionListItem } from 'Sections/SectionListItem';

import { FiCode } from 'react-icons/fi';

type ProjectProps = {
 title: string;
 link: string;
 imageUrl: string;
 tech?: string[];
 description: string;
};

export const Project: React.FC<ProjectProps> = ({ title, link, tech, description }) => {
 const theme = useTheme();

 const boxShadow = useColorModeValue('4px 4px 9px black', '4px 4px 9px black');
 const tagBackground = useColorModeValue(theme.colors.red[500], theme.colors.red[500]);
 const tagColor = useColorModeValue('white', 'black');
 const textColor = useColorModeValue('black', 'white');
 const buttonColor = useColorModeValue(theme.colors.red[500], theme.colors.red[500]);
 const buttonTextColor = useColorModeValue('white', 'black');

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
     <Flex as="ul" aria-label="technologies used" direction="row" wrap="wrap">
      {tech?.map(tag => (
       <Tag
        as="li"
        size="lg"
        key={tag}
        color={tagColor}
        mr={2}
        mt={2}
        maxH={1}
        fontFamily="Jetbrains Mono"
        backgroundColor={tagBackground}>
        {tag}
       </Tag>
      ))}
     </Flex>
     <Button
      as="a"
      size="md"
      colorScheme="red"
      href={link}
      target="_blank"
      rel="noopener"
      color={buttonTextColor}
      leftIcon={<FiCode size={18} color={buttonTextColor} />}
      boxShadow={boxShadow}
      borderRadius={8}
      mt={5}
      background={buttonColor}>
      Source code
     </Button>
    </Flex>
   </Stack>
  </SectionListItem>
 );
};
