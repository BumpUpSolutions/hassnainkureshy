import { Social } from './Social';
import { Greeting } from './Greeting';
import { Description } from './Description';
import { DisplayImage } from './DisplayImage';
import { Stats } from './Stats';

const About = () => {
  return (
    <div id='about'>
      <Social />
      <div className='flex flex-1 flex-col lg:flex-row items-center lg:space-x-8 py-5'>
        <div className='lg:w-1/2 lg:pl-24 md:px-16 px-2'>
          <Greeting />
          <Description />
        </div>
        <div className='w-full lg:w-1/2 mx-auto overflow-hidden'>
          {/* <DisplayImage /> */}
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default About;
