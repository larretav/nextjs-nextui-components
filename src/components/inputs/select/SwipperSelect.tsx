'use client';
import { cn } from '@/lib/utils';
import { Image } from '@heroui/image';
import clsx from 'clsx';
import React, { useRef, useState } from 'react'
import { Swiper, SwiperRef, SwiperSlide, SwiperClass } from 'swiper/react';

// Import Swiper styles
import "swiper/css";


import { IconButton } from '../buttons/IconButton';
import { FaChevronDown, FaChevronRight, FaChevronUp } from 'react-icons/fa6';

interface SwipperSelecItem {
  id: number | string;
  icon: React.ReactElement | string;
  label?: string;
}

type Props = {
  items: SwipperSelecItem[];
  direction?: 'vertical' | 'horizontal';
  className?: string;
  onChange?: (value: SwipperSelecItem) => void;
}

export const SwipperSelect = ({ items = [], direction = 'vertical', onChange, className }: Props) => {

  const someHasLabel = items.some(({ label }) => label);

  const swiperRef = useRef<SwiperRef>(null);
  const [selectedIndex, setSelectedIndex] = useState(0)


  const handleNext = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleActiveIndexChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex;

    setSelectedIndex(index);

    if (onChange)
      onChange(items[index])
  }

  return (
    <div
      className={cn(clsx("flex flex-col w-28 h-36", {
        "flex-row w-40 h-16": direction === 'horizontal',
      }), className)}
    >

      <ArrowComponent action="prev" direction={direction} onPress={handlePrev} />

      <Swiper
        ref={swiperRef}
        direction={direction}
        allowTouchMove={true}
        spaceBetween={direction === 'vertical' && someHasLabel ? 50 : 20}
        centeredSlides
        slidesPerView={2}
        onActiveIndexChange={handleActiveIndexChange}
        className="w-full h-full "
      >
        {items.map(({ id, icon, label }, idx) => {
          return (
            <SwiperSlide key={`id-${idx}-${id}`}  >
              <div className="h-full  flex items-center justify-center ">
                <div className="w-full flex flex-col items-center justify-center gap-0" key={label}>
                  {
                    React.isValidElement(icon)
                      ? <div className="drop-shadow-md">{icon}</div>
                      : typeof icon === "string" && <Image src={icon} alt={label} width={40} height={40} className={clsx("object-contain drop-shadow-md transition-all", {
                        'scale-125 drop-shadow-[0_0_4px_hsl(var(--heroui-primary)_/_0.5)] dark:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]': selectedIndex === idx
                      })} />
                  }

                  {label && <span className={clsx("font-normal text-small", {
                    "font-semibold ": selectedIndex === idx
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
      <IconButton size="sm" onPress={onPress} ><FaChevronUp size="1.2rem" className={clsx("text-default-400", {
        'rotate-180': direction === 'vertical' && key === 'next',
        'rotate-90': direction === 'horizontal' && key === 'next',
        '-rotate-90': direction === 'horizontal' && key === 'prev',
      })} /></IconButton>
    </div>
  )
}