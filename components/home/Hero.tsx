import Link from 'next/link';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
const plafairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)] '>
      <div className='grid-rows-8 grid  h-full w-full gap-5'>
        {/* FIRST ROW */}
        <div className='grid h-[8rem]  w-full grid-cols-[30%_auto] gap-20'>
          <div className='h-full w-full  overflow-hidden'>
            <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px] border'>
              <Image
                src='https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg'
                alt='Low Angle Shot of Woman in Gray and White Sweater'
                width={640}
                height={360}
                className='h-full w-full object-cover'
              />
            </div>
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase '>Awaken your</h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* SECOND ROW */}
        <div className='grid h-[8rem]  w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(plafairDisplay.className, 'headline-1 lowercase')}
            >
              inner
            </h2>
          </div>

          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px] border'>
            <Image
              src='https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg'
              alt='Low Angle Shot of Woman in Gray and White Sweater'
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>

          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              Goddess<span className='text-green'>.</span>
            </h2>
          </div>
        </div>

        <hr className='border-gray' />

        {/* THird ROW */}
        <div className='grid h-[8rem]  w-full grid-cols-[40%_auto] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-semibold uppercase'>Unveling</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px] border'>
            <Image
              src='https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg'
              alt='Low Angle Shot of Woman in Gray and White Sweater'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <hr className='border-gray' />

        {/* FOURTH ROW */}
        <div className='grid h-[8rem] w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px] border'>
            <Image
              src='https://images.pexels.com/photos/7645609/pexels-photo-7645609.jpeg'
              alt='Low Angle Shot of Woman in Gray and White Sweater'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className='headline-1 font-bold uppercase'>
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                With
              </span>{' '}
              M
              <span
                className={cn(
                  plafairDisplay.className,
                  'font-normal lowercase text-pink'
                )}
              >
                i
              </span>
              mosa
              <span className='text-orange'>.</span>
            </h2>
          </div>
        </div>
        {/* PACKAGES */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-[16%] left-[37.5%] z-[1] flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/60 backdrop-blur-lg hover:shadow-violet/60 '
        >
          <p className='z-[3]'>Packages</p>
          {/* FILLER 1*/}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2  w-full  bg-violet/80 group-hover:top-1/2 '></span>

          {/* FILLER 2*/}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2  w-full  bg-violet/80 group-hover:top-0 '></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
