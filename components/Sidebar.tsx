import { useTheme } from 'next-themes';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdMail, MdFileDownload } from 'react-icons/md';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoMdMoon } from 'react-icons/io';
import { CgToggleOff, CgToggleOn } from 'react-icons/cg';
import { useEffect, useState } from 'react';

const Sidebar = () => {
 const [isMounted, setIsMounted] = useState(false);
 const { theme, setTheme } = useTheme();

 useEffect(() => {
  setIsMounted(true);
 }, []);

 const toggleTheme = () => {
  if (isMounted) {
   setTheme(theme === 'light' ? 'dark' : 'light');
  }
 };

 return (
  <>
   <div className="rounded-t-lg bg-black overflow-hidden">
    <img className="w-48 h-48 mx-auto" src="images/ME.jpg" alt="Picture of the author" />
   </div>

   <div className="rounded-b-lg shadow-md bg-white dark:bg-dark-card py-4 px-4">
    <hgroup className="lg:text-left md:text-center">
     <h1 className="text-2xl font-bold dark:text-gray-300">Mohamad Omran</h1>
     <h2 className="text-md text-gray-700 dark:text-gray-300">Software Engineer</h2>
    </hgroup>

    <div className="pt-8 md:flex md:flex-row md:justify-center lg:flex lg:flex-col">
     <a
      href="mailto:mohamad1_3omran@hotmail.com"
      target="_blank"
      className="flex items-center mb-0.5 hover:underline md:mr-4">
      <MdMail className="text-lg dark:text-gray-300" />
      <span className="ml-2 md:ml-1 dark:text-gray-300">mohamad1_3omran@hotmail.com</span>
     </a>

     <a
      href="https://github.com/mohamadomran"
      target="_parent"
      className="flex items-center mb-0.5 hover:underline md:mr-4">
      <AiFillGithub className="text-lg dark:text-gray-300" />
      <span className="ml-2 md:ml-1 dark:text-gray-300">github/mohamadomran</span>
     </a>
     <a
      href="https://linkedin.com/in/mohamad-omran/"
      target="_parent"
      className="flex items-center hover:underline md:mr-4">
      <AiFillLinkedin className="text-lg dark:text-gray-300" />
      <span className="ml-2 md:ml-1 dark:text-gray-300">linkedin.com/mohamad-omran/</span>
     </a>
    </div>
   </div>

   <div className="my-4">
    <a
     href=""
     download="name"
     className="bg-gray-300 dark:bg-white hover:bg-gray-400 dark:hover:bg-gray-200 text-gray-800 py-2 px-4 rounded flex items-center justify-center">
     <MdFileDownload />
     <span className="ml-2">Download Resume</span>
    </a>
    {theme === 'light' && (
     <div className="flex items-center justify-center pt-2">
      <CgToggleOff onClick={toggleTheme} className="cursor-pointer mr-2 w-10 h-10" />
      <IoSunnyOutline className="w-8 h-8" />
     </div>
    )}
    {theme === 'dark' && (
     <div className="flex items-center justify-center pt-2">
      <CgToggleOn onClick={toggleTheme} className="cursor-pointer mr-2 w-10 h-10 text-white" />
      <IoMdMoon className="w-6 h-6 text-white" />
     </div>
    )}
   </div>
  </>
 );
};

export default Sidebar;
