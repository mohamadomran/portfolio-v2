import React from 'react';
import { Flex, Heading, Tag, Text, useColorModeValue, useTheme } from '@chakra-ui/react';
import { SectionListItem } from 'Components/SectionListItem';

type JobProps = {
 company: string;
 title: string;
 dates: { start: string; end: string };
 tech?: string[];
};

export const Experience: React.FC<JobProps> = ({ company, title, dates, tech }) => {
 const theme = useTheme();
 const tagBackground = useColorModeValue(
  theme.colors.brand.maizeYellow,
  theme.colors.brand.maizeYellow,
 );
 const textColor = useColorModeValue(theme.colors.brand.richBlack, theme.colors.brand.pureWhite);

 return (
  <SectionListItem>
   <Heading as="h3" size="md" fontFamily="JetBrains Mono">
    <Text color={textColor} mr="20%" fontFamily="Jetbrains Mono">
     {company}
    </Text>
   </Heading>
   <Flex justify="space-between" wrap="wrap" align="center">
    <Text color={textColor} mr="30%" fontFamily="Jetbrains Mono" fontSize={[14, 18]}>
     {title}
    </Text>
    <Text
     color={textColor}
     fontFamily="Jetbrains Mono"
     fontSize={[14, 16]}>{`${dates.start} to ${dates.end}`}</Text>
   </Flex>
   <Flex as="ul" aria-label="technologies used" direction="row" wrap="wrap">
    {tech?.map(tag => (
     <Tag
      as="li"
      key={tag}
      color={theme.colors.brand.richBlack}
      mr={4}
      mt={4}
      fontFamily="Jetbrains Mono"
      backgroundColor={tagBackground}>
      {tag}
     </Tag>
    ))}
   </Flex>
  </SectionListItem>
 );
};
