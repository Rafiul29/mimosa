import Image from 'next/image';
import React from 'react';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='relative h-[500px] w-[500px] bg-gray'>
          {/* LEFT BOX */}
          <div className='absolute -left-[25%] -top-[15%] z-[2] h-[400px] w-[300px] rounded-tl-[100px] bg-purple-50'>
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
          <div className='absolute left-[50%] top-[50%] z-[3] h-[400px] w-[350px] -translate-x-1/2 -translate-y-1/2 bg-purple-400 '>
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
          <div className='absolute -bottom-[10%] -right-[25%] z-[2] h-[400px] w-[300px] rounded-br-[100px]  bg-purple-50'>
            <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
