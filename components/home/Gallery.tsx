import { data } from '@/data/gallery';
import SectionTitle from '../shared/SectionTitle';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { gallery } from '@/types/gallery';

const Gallery = () => {
  return (
    <section className='min-h-screen bg-dark text-light'>
      <div className='wrapper section-padding h-full w-full'>
        <SectionTitle
          subtitle='Gallery'
          title='A visual glimpse of our beauties'
          color='bg-green'
        />

        <div className='gallery-grid-parent h-screen w-full gap-10'>
          {data.map((item: gallery) => (
            <div
              key={item.id}
              className={cn(
                
                ` grid-child-${item.id} eq group h-full w-full overflow-hidden border-[12px] border-green/10 shadow-2xl hover:border-green/20`
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                height={item.height}
                width={item.width}
                priority
                className='eq h-full w-full object-cover brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;