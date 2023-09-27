'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useState } from 'react';

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setshouldOpenTab] = useState<number>(0);

  /* handleSubmit */
  const handleSubmit = useCallback(
    (index: number) => {
      setshouldOpenTab(index);
      onclick && onClick;
    },
    [onClick]
  );

  return (
    <div className='flex flex-col gap-20'>
      {/* tabs */}
      <div className='flex items-center self-center'>
        {tabs?.map((tab: string, index: number) => (
          <button  onClick={() => handleSubmit(index)} key={index} className={cn("w-[15rem] h-[4rem] border eq flex items-center justify-center whitespace-nowrap border-gray px-6 py-3 text-center text-lg font-semibold tracking-widest",
          index===0 && "rounded-bl-2xl",
          index===tabs.length-1 && "rounded-tr-2xl",
          shouldOpenTab===index && "border-dark bg-dark text-white"
          )}>
            {tab}
          </button>
        ))}
      </div>
      {/*Content*/}
      <div className=''>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div className={cn(shouldOpenTab===index ? "block":"hidden")} key={index}>{item}</div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;
