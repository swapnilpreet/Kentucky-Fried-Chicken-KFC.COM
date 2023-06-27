import React, { useState } from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ItemsCarousel from 'react-items-carousel';
import data from './ProductSlideshow.json';
import {BsChevronDoubleLeft,BsChevronDoubleRight} from 'react-icons/bs'

export const Slideshow = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
      <div className='' style={{ padding: `0 ${chevronWidth}px` }}>
        <ItemsCarousel
          className="tablet:numberOfCards"
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
        <div className=''>
              <div className='mt-10'>
                <div className='h-80 w-[80%] rounded-xl bg-gray-100 '>
                    <img src={item.image} className='w-full h-full' alt="" />
                </div>
                <div className='mt-5 flex flex-col gap-5'>
                     <p>{item.name}</p>
                     <p>calories {item.calories}</p>
                </div>
              </div>
         </div>
        ))}
        </ItemsCarousel>
      </div>
    );
}