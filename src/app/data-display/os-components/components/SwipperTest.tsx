'use client';

import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Button } from '@/components';

const SwipperTest = () => {

  const [swiperIndex, setSwiperIndex] = useState(0);

  const swiperRef = useRef<SwiperRef>(null);

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    setSwiperIndex(swiperRef.current.swiper.activeIndex)
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    setSwiperIndex(swiperRef.current.swiper.activeIndex)
  };




  return (
    <div className="flex flex-col max-w-[400px] bg-red-300">
      <div className="flex gap-3 p-3 max-w-12">
        <Button onPress={handlePrev}>Prev</Button>
        <Button onPress={handleNext}>Next</Button>
      </div>
      <div className="">
        <Swiper ref={swiperRef} >
          <SwiperSlide className="bg-red-900">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-green-900">Slide 2</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default SwipperTest