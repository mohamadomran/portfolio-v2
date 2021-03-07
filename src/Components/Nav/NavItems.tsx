import React from 'react';
import { Text } from '@chakra-ui/react';

import { NavLink } from './NavLink';

export const NavItems: React.FC = () => {
 return (
  <>
   <NavLink target="about" style="text">
    <Text fontFamily="Jetbrains Mono">About</Text>
   </NavLink>
   <NavLink target="experience" style="text">
    <Text fontFamily="Jetbrains Mono">Experience</Text>
   </NavLink>
   <NavLink target="projects" style="text">
    <Text fontFamily="Jetbrains Mono">Projects</Text>
   </NavLink>
   <NavLink target="githubProjects" style="text">
    <Text fontFamily="Jetbrains Mono">Github Projects</Text>
   </NavLink>
  </>
 );
};
