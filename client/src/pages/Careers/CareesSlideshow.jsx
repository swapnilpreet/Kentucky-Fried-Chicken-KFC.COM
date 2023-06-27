import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ItemsCarousel from 'react-items-carousel';
import data from './CareersSlideshow.json';
import {BsChevronDoubleLeft,BsChevronDoubleRight} from 'react-icons/bs'

export const CareesSlideshow = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div className='' style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={3}
          gutter={20}
          leftChevron={<BsChevronDoubleLeft size={25}/>}
          rightChevron={<BsChevronDoubleRight size={25}/>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
    {data.products.map((item)=>(
        <div className='relative h-[500px] mt-10 '>
              <div className=''>
                <div className=' h-[500px] bg-gray-100'>
                    <img src={item.image} className='w-full h-full  rounded-t-xl' alt="" />
                </div>
                <div className='absolute bottom-0 left-10 right-0 top-96 mt-5 flex flex-col gap-5 text-white'>
                     <p style={{letterSpacing:"2px"}}>{item.role}</p>
                     <h1>{item.position}</h1>
                </div>
              </div>
         </div>
        ))}
        </ItemsCarousel>
      </div>
    );
}