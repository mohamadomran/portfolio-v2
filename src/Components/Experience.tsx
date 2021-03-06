import React from 'react';
import { Flex, Heading, Tag, Text, useColorModeValue, useTheme } from '@chakra-ui/react';
import { SectionListItem } from 'Sections/SectionListItem';

type JobProps = {
 company: string;
 title: string;
 dates: { start: string; end: string };
 tech?: string[];
};

export const Experience: React.FC<JobProps> = ({ company, title, dates, tech }) => {
 const theme = useTheme();
 const tagBackground = useColorModeValue(theme.colors.brand.lavaRed, theme.colors.brand.lavaRed);
 const tagColor = useColorModeValue(theme.colors.brand.platinumWhite, theme.colors.brand.richBlack);
 const textColor = useColorModeValue(
  theme.colors.brand.richBlack,
  theme.colors.brand.platinumWhite,
 );

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
