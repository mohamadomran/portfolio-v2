import { services } from '../services/data';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
 return (
  <div className="flex flex-col flex-grow">
   <div className="p-4 bg-white dark:bg-dark-card shadow-md border-t dark:border-dark rounded-b-lg">
    <p className="dark:text-gray-200">
     An Enthusiast Software Engineer with more than 2 years of experience. I developed sites from
     the ground up and improved already existing solutions. I have worked with UI frameworks like
     React and Angular. My main programming languages are Javascript/Typescript, Python, and
     currently I'm refining my C++ skills.
    </p>
   </div>
   <div className="my-2">
    <h2 className="p-4 font-bold uppercase dark:text-gray-200">Technology Stack</h2>
    <div className="grid lg:grid-cols-2 gap-4 flex-grow">
     {services.map((service, index) => (
      <ServiceCard key={index} service={service} />
     ))}
    </div>
   </div>
  </div>
 );
};

export default Home;
