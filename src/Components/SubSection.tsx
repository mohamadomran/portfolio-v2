import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface SubSectionProps {
 children: ReactNode;
 id?: string;
}

export const SubSection: React.FC<SubSectionProps> = ({ children, id }) => {
 return (
  <Box as="section" id={id} alignItems="center" justifyContent="center" py={20}>
   {children}
  </Box>
 );
};
