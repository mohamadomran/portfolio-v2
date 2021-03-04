import { FunctionComponent } from 'react';
import { Category } from '../services/types';

export const Navbar: FunctionComponent<{
 value: Category | 'all';
 handleProjectsCategory: Function;
 active: string;
}> = ({ value, handleProjectsCategory, active }) => {
 let className = 'capitalize cursor-pointer hover:text-green-500 dark:hover:text-green-500';
 if (active === value) className += ' text-green-500 ';

 return (
  <li onClick={() => handleProjectsCategory(value)} className={className}>
   {value}
  </li>
 );
};
