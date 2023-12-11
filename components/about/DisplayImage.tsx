import Image from 'next/image';

export const DisplayImage = () => (
  <div className="mt-6 flex justify-center md:justify-end">
    <div className="w-3/4 md:w-full max-w-xs overflow-hidden">
      <Image 
        src="/displayimage.jpg" 
        alt="Your Image" 
        width={300}
        height={400}
        className="object-cover border-4 border-orange-500 rounded-lg w-full"
      />
    </div>
  </div>
);
