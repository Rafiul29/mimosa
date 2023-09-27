import Image from 'next/image';
import React from 'react';

const Community = () => {
  return (
    <section className='wrapper section-padding h-screen'>
      <div className='flex h-full w-full items-center justify-center'>
        {/* MAIN BOX */}
        <div className='bg-gray h-[500px] w-[500px] relative'>
          {/* LEFT BOX */}
          <div className='h-[400px] w-[300px] bg-purple-50 absolute z-[2] -left-[25%] -top-[15%] rounded-tl-[100px]'>
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
          <div className='h-[400px] w-[350px] bg-purple-400 absolute z-[3] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 '>
          <Image
              src='https://images.pexels.com/photos/2764972/pexels-photo-2764972.jpeg?auto=compress&cs=tinysrgb&w=600'
              alt='woman image'
              width={720}
              height={1280}
              priority
              className='h-full w-full object-cover'
            />
          </div>
          {/* RIGHT BOX */}
          <div className='h-[400px] w-[300px] bg-purple-50 absolute z-[2] -right-[25%] -bottom-[10%]  rounded-br-[100px]'>
          <Image
              src='https://images.pexels.com/photos/2383117/pexels-photo-2383117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
