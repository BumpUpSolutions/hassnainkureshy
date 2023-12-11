import Image from 'next/image';

export const DisplayImage = () => (
  <div className="mt-6 flex justify-center md:justify-end">
    <div className="w-3/4 md:w-full max-w-md overflow-hidden">
      <Image 
        src="/display.png" 
        alt="Your Image" 
        width={450}
        height={500}
        className="object-cover w-full"
      />
    </div>
  </div>
);
