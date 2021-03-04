import { RiComputerLine } from 'react-icons/ri';
import { SiMaterialdesignicons } from 'react-icons/si';
import { AiOutlineApi } from 'react-icons/ai';
import {
 InterfaceEducation,
 InterfaceExperience,
 InterfaceProject,
 InterfaceService,
 InterfaceSkill,
} from './types';
import { BiServer } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';

// Services
export const services: InterfaceService[] = [
 {
  Icon: RiComputerLine,
  title: 'FrontEnd Stack',
  tech: ['Reactjs', 'Nextjs', 'Angular', 'CSS/SASS', 'Typescript'],
 },
 {
  Icon: BiServer,
  title: 'BackEnd Stack',
  tech: ['Nodejs', 'NestJs', 'Postgres'],
 },
];

// Experience
export const experiences: InterfaceExperience[] = [
 {
  job: 'Software Engineer',
  company: 'Netways',
  period: '11/2018 - Present',
 },
 {
  job: 'FrontEnd Developer',
  company: 'IDTP - International Diamond Trading Platform',
  period: '06/2018 - 10/2018',
 },
];

// Education
export const educations: InterfaceEducation[] = [
 {
  Icon: GiGraduateCap,
  school: 'American University of Science and Technology',
  degree: 'Masters, Computer and Communication Engineering',
 },
 {
  Icon: GiGraduateCap,
  school: 'American University of Science and Technology',
  degree: 'BS in Computer and Communication Engineering ',
 },
];

// Projects
export const projects: InterfaceProject[] = [
 {
  name: 'ADDA Chatbot',
  description: "'A Chatbot integrated into Abu Dhabi's Governmental Service Portal.",
  image_URL: '/images/adda-bot.png',
  deployed_URL: 'https://www.tamm.abudhabi/en',
  github_URL: '',
  category: ['react'],
  techStack: ['React', 'Typescript', 'Redux', 'CSS', 'Bot-Framework', 'Rollup', 'Azure'],
 },
 {
  name: 'Ethrai',
  description:
   'An Online training Platform for the Institute of Public Adminstration in Saudi Arabia.',
  image_URL: '/images/ethrai.png',
  deployed_URL: 'https://ethrai.sa/',
  github_URL: '',
  category: ['angular'],
  techStack: ['Angular', 'Typescript', 'CSS'],
 },
 {
  name: 'SFDA',
  description: "Saudi Food And Drug Authority's public and employee's portal",
  image_URL: '/images/sfda.png',
  deployed_URL: 'https://www.sfda.gov.sa/en',
  github_URL: '',
  category: ['react'],
  techStack: ['React', 'Typescript', 'Redux', 'SASS', 'NodeJs', 'Webpack', 'Azure'],
 },
 {
  name: 'ADDA Chatbot',
  description: "A Chatbot integrated into Abu Dhabi's Governmental Service Portal.",
  image_URL: '/images/psplatform.png',
  deployed_URL: 'https://www.psplatform.com/',
  github_URL: '',
  category: ['react'],
  techStack: ['React', 'Redux', 'CSS'],
 },
];
