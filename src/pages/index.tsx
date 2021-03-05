import React from 'react';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import { Icon } from 'Components/Icon';
import { Footer } from 'Components/Footer';
import { About } from 'Sections/About';
import { Layout } from 'layouts';
import { Profile } from 'Sections/Profile';
import { NavBar } from 'Components/Nav/NavBar';
import { Job } from 'Components/Job';
import { Project } from 'Components/Project';
import { SectionList } from 'Sections/SectionList';

const title = 'Mohamad Omran | Software Engineer';
const description = 'I speedrun bug-fixing.';

const contactInfo = (
 <>
  <Icon label="email" link={`mailto:mohamad1_3omran@hotmail.com`} icon={<FiMail size={30} />} />
  <Icon
   label="linkedin"
   link={`https://www.linkedin.com/in/mohamad-omran`}
   icon={<FiLinkedin size={30} />}
  />
  <Icon label="github" link={`https://github.com/mohamadomran`} icon={<FiGithub size={30} />} />
 </>
);

const IndexPage = () => {
 return (
  <>
   <a id="skip" aria-label="skip navigation bar" href="#profile"></a>
   <div id="top" />
   <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://mohamadomran.vercel.app" />
   </Head>

   <NavBar />

   <Layout>
    <Profile name="Mohamad Omran" contact={contactInfo} />
    <About>
     <Text>
      An Enthusiast Software Engineer with more than 2 years of experience. I developed sites from
      the ground up and improved already existing solutions. I have worked with UI frameworks like
      React and Angular. My main programming languages are Javascript/Typescript, Python, and
      currently I'm refining my C++ skills.
     </Text>
    </About>

    <SectionList id="experience" heading="Experience">
     <Job
      company="Netways"
      title="Software Engineer"
      dates={{ start: '11/2018', end: 'Present' }}
      tech={['Reactjs', 'Redux', 'Angular', 'CSS/SASS', 'Typescript', 'NodeJs']}
     />
     <Job
      company="IDTP - International Diamond Trading Platform"
      title="FrontEnd Developer"
      dates={{ start: '06/2018', end: '10/2018' }}
      tech={['Reactjs', 'Redux', 'CSS']}
     />
    </SectionList>

    <SectionList id="projects" heading="Projects">
     <Project
      title="ADDA Chatbot"
      link="https://www.tamm.abudhabi/en"
      imageUrl="/images/adda-bot.png"
      tech={['React', 'Typescript', 'Redux', 'CSS', 'Bot-Framework', 'Rollup', 'Azure']}
      description="A Chatbot integrated into Abu Dhabi's Governmental Service Portal."
     />
     <Project
      title="Ethrai"
      link="https://ethrai.sa/"
      imageUrl="/images/ethrai.png"
      tech={['Angular', 'Typescript', 'CSS']}
      description="An Online training Platform for the Institute of Public Adminstration in Saudi Arabia."
     />
     <Project
      title="SFDA"
      link="https://www.sfda.gov.sa/en"
      imageUrl="/images/sfda.png"
      tech={['React', 'Typescript', 'Redux', 'SASS', 'NodeJs', 'Webpack', 'Azure']}
      description="Saudi Food And Drug Authority's public and employee's portal"
     />
     <Project
      title="PS-Platform"
      link="https://www.psplatform.com"
      imageUrl="/images/psplatform.png"
      tech={['React', 'Redux', 'CSS']}
      description="International Diamond Trading Platform, it's the one stop shop for Precious Stones and Colored Diamonds"
     />
    </SectionList>

    <Box p={20} />
   </Layout>

   <Footer />
  </>
 );
};

export default IndexPage;
