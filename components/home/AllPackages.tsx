import SectionTitle from "../shared/SectionTitle"
import HorizontalTab from "../ui/HorizontalTab"
import PackageItem from "./PackageItem"

import {data} from "@/data/packages"

const AllPackages = () => {
  return (
    <section className="wrapper section-padding min-h-screen">
           <SectionTitle
        title='Explore our beauty packages'
        subtitle='Packages'
        color='bg-violet'
      />

<HorizontalTab tabs={['Beauty', 'Events', 'Wellness ']}>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .sort((a:any,b:any)=>a.price-b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .sort((a:any,b:any)=>a.price-b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .sort((a:any,b:any)=>a.price-b.price)
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  )
}

export default AllPackages