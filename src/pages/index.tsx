import React, { useState, useMemo } from 'react';
import axios from 'axios';

import Head from 'next/head';
import { Text } from '@chakra-ui/react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import { Icon } from 'Components/Icon';
import { Footer } from 'Components/Footer';
import { About } from 'Components/About';
import { Layout } from 'layouts';
import { Profile } from 'Components/Profile';
import { NavBar } from 'Components/Nav/NavBar';
import { Experience } from 'Components/Experience';
import { Project } from 'Components/Project';
import { SectionList } from 'Components/SectionList';
import { GithubRepo } from 'Components/GithubRepo';

const title = 'Mohamad Omran | Software Engineer';
const description =
 'Mohamad Omran is from Beirut, Lebanon where he works as a Software Engineer at Netways. In his spare time, Mohamad enjoys drawing and a bit of racing videogames. Mohamad likes to speedrun bug-fixing and he hates talking in 3rd person mode.';

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

interface Repo {
 id: string;
 name: string;
 svn_url: string;
 description: string;
 createdat: string;
}

const IndexPage = () => {
 const [repositories, setRepositories] = useState<Repo[]>();

 useMemo(async () => {
  const res = await axios.get('https://api.github.com/users/mohamadomran/repos?sort=updated');
  setRepositories(res.data);
  console.log(res.data);
 }, []);

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
     <Experience
      company="Netways"
      title="Software Engineer"
      dates={{ start: '11/2018', end: '04/2021' }}
      tech={['Reactjs', 'Redux', 'Angular', 'CSS/SASS', 'Typescript', 'NodeJs']}
     />
     <Experience
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
      tech={['React', 'Typescript', 'Redux', 'CSS', 'Bot-Framework', 'Rollup', 'Azure']}
      description="A Chatbot integrated into Abu Dhabi's Governmental Service Portal."
     />
     <Project
      title="Ethrai"
      link="https://ethrai.sa/"
      tech={['Angular', 'Typescript', 'CSS']}
      description="An Online training Platform for the Institute of Public Adminstration in Saudi Arabia."
     />
     <Project
      title="SFDA"
      link="https://www.sfda.gov.sa/en"
      tech={['React', 'Typescript', 'Redux', 'SASS', 'NodeJs', 'Webpack', 'Azure']}
      description="Saudi Food And Drug Authority's public and employee's portal"
     />
     <Project
      title="PS-Platform"
      link="https://www.psplatform.com"
      tech={['React', 'Redux', 'CSS']}
      description="International Diamond Trading Platform, it's the one stop shop for Precious Stones and Colored Diamonds"
     />
    </SectionList>

    <SectionList id="githubProjects" heading="Github Projects">
     {repositories?.map(({ id, name, description, svn_url }: Repo) => {
      return <GithubRepo key={id} name={name} url={svn_url} description={description} />;
     })}
    </SectionList>
   </Layout>

   <Footer />
  </>
 );
};

export default IndexPage;
