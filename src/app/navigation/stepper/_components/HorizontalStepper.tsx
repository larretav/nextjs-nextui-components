'use client';
import { Button, Step, Stepper } from '@/components'
import { Avatar } from '@heroui/avatar';
import React from 'react'
import { FaCalendarPlus } from 'react-icons/fa'
import { FaAddressBook, FaAmazon, FaPerson } from 'react-icons/fa6'

export const HorizontalStepper = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur === 2 ? cur : cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur === 0 ? cur : cur - 1);


  return (
    <div>

      <div className="flex flex-col gap-3">
        <Stepper activeStep={activeStep} >
          <Step onPress={() => { setActiveStep(0) }}>1. Esto es la opcion 1</Step>
          <Step onPress={() => { setActiveStep(1) }}>2</Step>
          <Step onPress={() => { setActiveStep(2) }}>3</Step>
        </Stepper>

        <Stepper activeStep={activeStep} >
          <Step isIconOnly><FaCalendarPlus /></Step>
          <Step isIconOnly><FaAddressBook /></Step>
          <Step isIconOnly><FaAddressBook /></Step>
        </Stepper>

        <Stepper activeStep={activeStep} >
          <Step onPress={() => { setActiveStep(0) }} className="flex flex-col gap-2 p-4 rounded-2xl  bg-content2">
            <Avatar fallback={<FaAmazon />} />

            <div className="flex flex-col gap-1">
              <p className="font-semibold">Esta es la opcion 1</p>
              <p className="text-small text-foreground-400">Esto es un subtitulo o algo asi</p>
            </div>
          </Step>
          <Step onPress={() => { setActiveStep(1) }} className="flex flex-col gap-2 p-4 rounded-2xl  bg-content2">
            <Avatar fallback={<FaPerson />} />

            <div className="flex flex-col gap-1">
              <p className="font-semibold">Esta es la opcion 2</p>
              <p className="text-small text-foreground-400">Esto es un subtitulo o algo asi</p>
            </div>
          </Step>
          <Step onPress={() => { setActiveStep(2) }} className="flex flex-col gap-2 p-4 rounded-2xl  bg-content2">
            <Avatar fallback={<FaCalendarPlus />} />

            <div className="flex flex-col gap-1">
              <p className="font-semibold">Esta es la opcion 4</p>
              <p className="text-small text-foreground-400">Esto es un subtitulo o algo asi</p>
            </div>
          </Step>
        </Stepper>
      </div>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  )
}
