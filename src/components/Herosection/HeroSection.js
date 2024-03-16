
'use client'
import Image from 'next/image';
import Card from './card';
// import Card from 'components/Card';


export default function HeroSection() {
  const Headline = "";
  const img=" ";
  const cards = [
    { title: '3D Text', imgSrc:"/Hero1.png"
  },
  { title: '3D Text', imgSrc:"/Hero.png"
  },
  { title: '3D Text', imgSrc:"/Hero1.png"
  },
  { title: '3D Text', imgSrc:"/Hero.png"
  },
  { title: '3D Text', imgSrc:"/Hero1.png"
}
];

  return (
  
   <>
  <div className='flex'>
      <div className=" ml-24 text-center md:text-left mb-4 md:mb-0 pt-20 w-1/2">
        < p className="text-6xl md:text-6xl font bold text-gray-800 animate-pulse">Find inspiration to furnish and decorate your home in  3D </p>
        <div className="mt-4 space-x-4 pt-8 ">
          <button className="px-4 py-2 bg-pink-900 shadow-xl text-white rounded-full">Explore</button>
          <button className="px-6 py-2 bg-blue-950 shadow-xl text-white rounded-full">Get Started</button>
        </div>
      </div>
      <div className="relative w-full h-64 md:w-1/2 md:h-auto w-1/2 pt-11">
      <Image
  src="/Hero3.png"  // Use a forward slash (/) to start the path
  alt="Hero image description"
  width={500}  // Adjust width as needed
  height={500}  // Adjust height as needed
  // Other props as desired (layout, sizes, etc.)
/>

      </div>
      </div>
      <div className="p-4 bg-white text-blue-900 text-center font-bold text-2xl">
            <h1>Explore the latest examples</h1>
            {/* <p>Try remixing a 3d design by opening it.</p> */}
            
            <div className="flex flex-wrap justify-center ">
                {cards.map((card, index) => (
                    <Card key={index} title={card.title}  imgSrc={card.imgSrc} />
                   
                   
                   
                 
                ))}
            </div>
            <div className='justify-item-center'>
            <button className="m-auto  px-4 py-2 bg-blue-500 text-white rounded-full">See all examples</button>
            </div>
            
           
        </div>
   </>
  );
}
