import Image from 'next/image';

export const DisplayImage = () => (
  <div className="flex justify-center lg:justify-end">
    <Image 
      src="/display.png" 
      alt="Your Image" 
      width={450}
      height={500}
      className="object-cover w-full"
    />
  </div>
);
