import { data } from '@/data/packages';
import HorizontalTab from '../ui/HorizontalTab';
import PackageItem from './PackageItem';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/Button';
import { packageItem } from '@/types/packageItem';
import SectionTitle from '../shared/SectionTitle';

interface PackagesProps {
  fromPackages?: boolean;
}

const Packages: React.FC<PackagesProps> = ({ fromPackages }) => {
  return (
    <section className='wrapper section-padding mt-40' id='packeages'>
      <SectionTitle
        title='packages'
        subtitle='Explore our package section'
        color='bg-violet'
      />

      <HorizontalTab tabs={['Beauty', 'Events', 'Wellness ']}>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: any) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Beauty')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: any) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}

          {fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Events')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)

              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {!fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .slice(0, 4)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
          {fromPackages &&
            data
              .filter((item: packageItem) => item.masterCategory === 'Wellness')
              .sort((a: packageItem, b: packageItem) => a.price - b.price)
              .map((item: packageItem) => (
                <PackageItem key={item.id} packageItem={item} />
              ))}
        </div>
      </HorizontalTab>

      {!fromPackages && (
        <div className='flex justify-center'>
          <Link
            href='/packages'
            className={cn(buttonVariants({ variant: 'outline' }), 'mt-20')}
          >
            View all packages
          </Link>
        </div>
      )}
    </section>
  );
};

export default Packages;

// npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss
