import { packageItem } from "@/types/packageItem"
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
            .filter((item: packageItem) => item.masterCategory === 'Beauty')
            .sort((a: packageItem,b: packageItem)=>a.price-b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Events')
            .sort((a: packageItem, b: packageItem)=>a.price-b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: packageItem) => item.masterCategory === 'Wellness')
            .sort((a: packageItem,b: packageItem)=>a.price-b.price)
            .map((item: packageItem) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  )
}

export default AllPackages