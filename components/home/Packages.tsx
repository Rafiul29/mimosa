import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';

const Packages = () => {
  return (
    <section className='wrapper section-padding ' id='packeages'>
     
      <HorizontalTab tabs={['Beauty', 'Events', 'Wellness ']}>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .sort((a:any,b:any)=>a.price-b.price)
            .slice(0,4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .sort((a:any,b:any)=>a.price-b.price)
            .slice(0,4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .sort((a:any,b:any)=>a.price-b.price)
            .slice(0,4)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>

     <div className='flex justify-center'>
     <Link href="/packages" className={cn(buttonVariants({variant:"outline"}),"mt-20")}>View all packages</Link>
     </div>
    </section>
  );
};

export default Packages;

// npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss
