import React from 'react';
import { Flex, Heading, Tag, Text, useColorModeValue, useTheme } from '@chakra-ui/react';
import { SectionListItem } from 'Sections/SectionListItem';

type JobProps = {
 company: string;
 title: string;
 dates: { start: string; end: string };
 tech?: string[];
};

export const Job: React.FC<JobProps> = ({ company, title, dates, tech }) => {
 const theme = useTheme();
 const tagBackground = useColorModeValue(theme.colors.red[500], theme.colors.red[500]);
 const tagColor = useColorModeValue('white', 'black');
 const textColor = useColorModeValue('black', 'white');

 return (
  <SectionListItem>
   <Heading as="h3" size="md" fontFamily="JetBrains Mono">
    <Text color={textColor} mr="20%" fontFamily="Jetbrains Mono">
     {company}
    </Text>
   </Heading>
   <Flex justify="space-between" wrap="wrap" align="center">
    <Text color={textColor} mr="30%" fontFamily="Jetbrains Mono">
     {title}
    </Text>
    <Text color={textColor} fontFamily="Jetbrains Mono">{`${dates.start} to ${dates.end}`}</Text>
   </Flex>
   <Flex as="ul" aria-label="technologies used" direction="row" wrap="wrap">
    {tech?.map(tag => (
     <Tag
      as="li"
      key={tag}
      color={tagColor}
      mr={2}
      mt={2}
      colorScheme="red"
      fontFamily="Jetbrains Mono"
      backgroundColor={tagBackground}>
      {tag}
     </Tag>
    ))}
   </Flex>
  </SectionListItem>
 );
};
