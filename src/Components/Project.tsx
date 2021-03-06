import React from 'react';
import {
 Flex,
 Button,
 Heading,
 Stack,
 Tag,
 Image,
 Text,
 useColorModeValue,
 useTheme,
} from '@chakra-ui/react';

import { SectionListItem } from 'Components/SectionListItem';

type ProjectProps = {
 title: string;
 link: string;
 imageUrl: string;
 tech?: string[];
 description: string;
};

export const Project: React.FC<ProjectProps> = ({ title, link, tech, description, imageUrl }) => {
 const theme = useTheme();

 const boxShadow = useColorModeValue('4px 4px 9px black', '4px 4px 9px black');
 const tagBackground = useColorModeValue(theme.colors.brand.lavaRed, theme.colors.brand.lavaRed);
 const tagColor = useColorModeValue('white', 'black');
 const textColor = useColorModeValue('black', 'white');
 const buttonColor = useColorModeValue(theme.colors.brand.lavaRed, theme.colors.brand.lavaRed);
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

     <Flex direction="column">
      <Image
       maxW="300px"
       src={imageUrl}
       borderWidth="medium"
       alt={`Photo of the website ${imageUrl}`}
      />
      <Button
       as="a"
       href={link}
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
