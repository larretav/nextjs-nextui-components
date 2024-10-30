'use client';
import useBreakpoint from '@/hooks/useBreakpoint'
import React, { useState } from 'react'
import ItemDetails from './ItemDetails';
import { users } from '../_utils/get-user-details';
import { useRouter } from 'next/navigation';



const PageContent = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();
  const isMobile = useBreakpoint('sm')


  const handleRowClick = (item: any) => {
    if (isMobile) {
      // Redirigir a una nueva página para móviles
      router.push(`/test/${item.id}`);
    } else {
      // Mostrar panel lateral en escritorio
      setSelectedItem(item);
    }
  };

  return (
    <div className="w-full">
      <table className=' w-full'>
        {/* Renderiza la tabla aquí */}
        <tbody >
          {users.map((item) => (
            <tr key={item.id} onClick={() => handleRowClick(item)} className='p-10 bg-default-100  rounded-2xl '>
              <td>{item.name}</td>
              {/* Otros datos */}
            </tr>
          ))}
        </tbody>
      </table>

      {!isMobile && selectedItem && (
        <div >
          {/* Renderizar detalles del elemento seleccionado en un panel */}
          <ItemDetails item={selectedItem} />
        </div>
      )}
    </div>
  );
}

export default PageContent