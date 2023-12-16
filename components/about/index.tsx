import { Greeting } from './Greeting';
import { Description } from './Description';
import { DisplayImage } from './DisplayImage';
import { Stats } from './Stats';

const About = () => {
  return (
    <div className="mb-8 lg:mb-32">
      <div className="flex flex-1 flex-col lg:flex-row items-center lg:space-x-8">
        <div className="lg:w-1/2">
          <Greeting />
          <Description />
        </div>
        <div className="w-full lg:w-1/2 mx-auto overflow-hidden">
          <DisplayImage />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default About;
