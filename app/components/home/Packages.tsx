import { data } from "@/data/packages"
import HorizontalTab from "../shared/HorizontalTab"
import SectionTitle from "../shared/SectionTitle"
import PackageItem from "./PackageItem"

const Packages = () => {
  return (
    <section className='wrapper section-padding ' id='packeages'>
      <SectionTitle title="Explore our beauty packages" subtitle="Packages" color="bg-violet" />
     <HorizontalTab  tabs={["Beauty","Events","Wellness"]}>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {
      data.filter((item:any)=>item.masterCategory==="Beauty").map((item:any)=>(
        <PackageItem key={item.id} {...item}/>
      ))
    }
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {
      data.filter((item:any)=>item.masterCategory==="Events").map((item:any)=>(
        <PackageItem key={item.id} {...item}/>
      ))
    }
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
  {
      data.filter((item:any)=>item.masterCategory==="Wellness").map((item:any)=>(
        <PackageItem key={item.id} {...item}/>
      ))
    }
  </div>
     </HorizontalTab>
    </section>
  )
}

export default Packages

// npm i -D prettier eslint-config-prettier prettier-plugin-tailwindcss