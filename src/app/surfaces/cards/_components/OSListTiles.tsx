'use client';
import { IconButton, PackageType } from '@/components'
import { ListTile } from '@/components/surfaces/cards/mobile/ListTile'
import { Avatar } from '@nextui-org/avatar'
import React from 'react'
import { FaEllipsisVertical, FaUser } from 'react-icons/fa6'

export const OSListTiles = () => {
  return (
    <>
      <ListTile
        title="Título"
        subtitle="SubTítulo"
        leading={<PackageType type="box" className="size-8" />}
        trailing={<IconButton><FaEllipsisVertical size="1rem" className="text-default-400" /></IconButton>}
        isPressable
        onPress={() => { console.log('Le picaste') }}
      />

      <ListTile
        title="Nike Air Force"
        subtitle={<div className="flex flex-col">
          <p className="text-sm font-medium">Tenis 28cm</p>
          <p className="text-xs font-bold text-foreground-900">35x30x20-1kg</p>
        </div>}
        leading={<PackageType type="box" className="size-8" />}
        trailing={<span className="font-bold text-large px-2">x4</span>}
      />
      <ListTile
        title={<div className="flex flex-col">
          <div className="flex flex-col text-sm">
            <p className='font-semibold'>Contenido:<span className="font-normal" > Informativo</span></p>
            <p className='font-semibold'>Tipo:<span className="font-normal" > Caja</span></p>
            <p className='font-semibold'>Dimensiones:<span className="font-normal" > 35cm x 30cm x 20cm - 1.5kg</span></p>
          </div>
        </div>}
        trailing={<span className="font-bold text-large px-2">x4</span>}
      />
      <ListTile
        title="0043123"
        subtitle="23/05/2024"
        trailing={<p className="font-bold text-2xl px-2">$230.00<span className="text-sm">MXN</span></p>}
      />
      <ListTile
        title="Título"
        subtitle="SubTítulo"
        leading={<IconButton color="danger"><FaUser size="1rem" /></IconButton>}
      />
      <ListTile
        title={<p className="text-base font-bold">DEP dental villa de cortes</p>}
        subtitle={<p className="text-sm font-medium">Ciudad de Mexico, Ciudad de Mexico MX, 03530</p>}
        leading={<Avatar showFallback fallback={<FaUser size="1.5rem" />} size="lg" className="bg-default-100 text-foreground-700" />}
      />
    </>
  )
}
