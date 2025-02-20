'use client';
import { cn } from '@/lib/utils';
import { Image } from '@heroui/image';
import clsx from 'clsx';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import { IconButton } from '../buttons/IconButton';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa6';

interface SwipperSelecItem {
  icon: React.ReactElement | string;
  label?: string;
}

type Props = {
  items: SwipperSelecItem[],
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

export const SwipperSelect = ({ items, direction = 'vertical', className }: Props) => {

  const swiperRef = useRef<SwiperRef>(null);
  const [selected, setSelected] = useState(0)


  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    setSelected(swiperRef.current.swiper.activeIndex);
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    setSelected(swiperRef.current.swiper.activeIndex);
  };


  return (
    <div className={cn(clsx("flex flex-col max-w-52 max-h-36", {
      "flex-row max-w-40 max-h-16": direction === 'horizontal',
    }), className)}>

      <ArrowComponent action="prev" direction={direction} onPress={handlePrev} />

      <Swiper direction={direction} ref={swiperRef} allowTouchMove={true} spaceBetween={20} centeredSlides slidesPerView={2} >
        {items.map(({ icon, label }, idx) => {
          return (
            <SwiperSlide key={idx} >
              <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-2 " key={label}>
                  {
                    React.isValidElement(icon)
                      ? <div className="drop-shadow-md">{icon}</div>
                      : typeof icon === "string" && <Image src={icon} alt={label} width={40} height={40} className="object-contain drop-shadow-md" />
                  }

                  {label && <span className={clsx("text-base", {
                    "font-semibold ": selected === idx
                  })}> {label}</span>}

                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <ArrowComponent action="next" direction={direction} onPress={handleNext} />

    </div>
  )
}


const ArrowComponent = ({ action: key, direction, onPress }: { action: 'next' | 'prev', direction: Props['direction'], onPress: () => void }) => {
  return (
    <div className="flex justify-center items-center">
      <IconButton onPress={onPress} ><FaChevronUp size="1.2rem" className={clsx("text-default-400", {
        'rotate-180': direction === 'vertical' && key === 'next',
        'rotate-90': direction === 'horizontal' && key === 'next',
        '-rotate-90': direction === 'horizontal' && key === 'prev',
      })} /></IconButton>
    </div>
  )
}