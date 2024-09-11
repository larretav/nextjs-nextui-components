import { PageTitle } from '@/components'
import RechargeDesktopCard from '@/components/surfaces/cards/desktop/RechargeDesktopCard'
import RechargeCustomAmountCard from "@/components/surfaces/cards/desktop-mobile/RechargeCustomAmountCard"
import React from 'react'
import DashboardCard from '@/components/surfaces/cards/desktop-mobile/DashboardCard'



export default function Page() {
  return (
    <div className="flex flex-col gap-3 px-6 py-3">
    <PageTitle text="Desktop Cards Components" />
    <p>DashboardCard (Desktop-Mobile)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        <DashboardCard text="Total" quantity={100} />
      </div>
    <p>RechargeDesktopCard</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <RechargeDesktopCard title="Básico" cost={200} badgeQuantity={2} paymentMethods={["card"]} description='Puedes realizar hasta 2 envíos' highlighted/>
    <RechargeDesktopCard title="Standard" cost={300} badgeQuantity={3} paymentMethods={["card" , "cash"]} description='Puedes realizar hasta 3 envíos'/>
    <RechargeDesktopCard title="Avanzada" cost={500} badgeQuantity={5} paymentMethods={["card" ,"cash", "transfer"]} description='Puedes realizar hasta 5 envíos'/>
    <RechargeDesktopCard title="Pro" cost={1000} badgeQuantity={10} paymentMethods={["card" ,"cash", "transfer"]} description='Puedes realizar hasta 10 envíos'/>    
      </div>
      <p>RechargeCustomAmountCard (Mobile-Desktop)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <RechargeCustomAmountCard title='Otra Cantidad' mode='desktop'/>
      <RechargeCustomAmountCard title='Otra Cantidad' mode='desktop' highlighted/>
      </div>
  </div>
  )
}