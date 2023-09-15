"use clinet"

import { on } from "events"
import { useCallback, useState } from "react"

interface HorizontalTabProps{
  tabs:string[]
  children:React.ReactNode
  onClick?:()=>void
}

const HorizontalTab:React.FC<HorizontalTabProps> = ({tabs,children,onClick}) => {

  const [shouldOpenTab,setShouldOpenTab]=useState<number>(0)

  const handleClick=useCallback((index:number)=>{
    setShouldOpenTab(index)
    onClick && onClick
  },[onClick])
  return (
    <div>
      {/* TABS */}
      <div>
        {tabs?.map((tab:string,index:number)=>(
          <button onClick={()=>handleClick(index)} key={index}>{tab}</button>
        ))}
      </div>
    </div>
  )
}

export default HorizontalTab;