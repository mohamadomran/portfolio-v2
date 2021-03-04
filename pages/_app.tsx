import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
 return (
  <ThemeProvider attribute="class">
   <Head>
    <title>Mohamad Omran | Software Engineer</title>
    <meta name="title" content="Mohamad Omran | Software Engineer" />
    <meta
     name="description"
     content="An Enthusiast Software Engineer with more than 2 years of experience.
		 I developed sites from the ground up and improved already existing solutions. I have worked with UI frameworks like React and Angular.
		 My main programming languages are Javascript/Typescript, Python, and currently I'm refining my C++ skills."
    />
   </Head>
   <div className="flex-1 lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm mx-auto p-5">
    <div className="grid lg:gap-4 gap-2 grid-cols-12">
     <div className="lg:col-span-3 col-span-12">
      <Sidebar />
     </div>
     <div className="lg:col-span-9 col-span-12 dark:text-gray-300">
      <Navbar />
      <Component {...pageProps} />
     </div>
    </div>
   </div>
  </ThemeProvider>
 );
}

export default MyApp;
