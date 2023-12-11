import { Greeting } from './Greeting'; // Adjust the path as necessary
import { Description } from './Description'; // Adjust the path as necessary
import { DisplayImage } from './DisplayImage'; // Adjust the path as necessary
import { Stats } from './Stats'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:flex-1">
          <Greeting />
          <Description />
        </div>
        <div className="md:w-1/4">
          <DisplayImage />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default About;
