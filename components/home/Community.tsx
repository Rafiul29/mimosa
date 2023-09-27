import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center relative'>
        {/* MAIN BOX */}
        <div className='relative h-[500px] w-[500px] bg-gray'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[400px] w-[300px] rounded-tl-[100px] overflow-hidden bg-purple-50'>
            <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* MID BOX */}
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 bg-purple-400  '>
            <Image
              src='https://images.pexels.com/photos/2383117/pexels-photo-2383117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* RIGHT BOX */}
          <div className='absolute -bottom-[10%] -right-[25%] z-[2] h-[400px] w-[300px] rounded-br-[100px] overflow-hidden bg-purple-50'>
            <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* UPPER RIGHT TEXT */}
          <h2 className='headline-2 font-bold uppercase absolute -top-[10%] left-[40%] whitespace-nowrap z-[2]'>Join Mimosa</h2>
          {/* BOTTOM RIGHT TEXT */}
          <h2 className='headline-2 font-bold uppercase absolute -bottom-[10%] right-[40%] z-[2]'>Community</h2>
        </div>
        {/* JOIN BUTTON */}
          {/* join button */}
          <Link
          href='/'
          className='eq group absolute bottom-[15%] right-[10%] z-[1] flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-blue/80 text-lg uppercase text-light shadow-lg shadow-dark/50 backdrop-blur-md group-hover:shadow-blue/60'
        >
          <p className='z-[3]'>Join Now</p>
          {/* filler 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full bg-red/90 group-hover:top-1/2'></span>
          {/* filler 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full bg-red/90 group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Community;
