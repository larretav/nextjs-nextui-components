'use client';
import { AddressCardInput, AutocompleteLocation, Drawer, IconButton } from '@/components'
import { DrawerBody, DrawerContent, DrawerFooter } from '@/components/navigation/drawer/Drawer';
import useBreakpoint from '@/hooks/useBreakpoint';
import { cn } from '@/lib/utils';
import { AutocompleteLocationModel } from '@/models';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Button } from '@nextui-org/button';
import { Listbox, ListboxItem } from '@nextui-org/listbox';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import clsx from 'clsx';
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';

export const OSSetOriginnAddressCard = () => {
  const [address, setAddress] = useState<AutocompleteLocationModel>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AddressCardInput address={address?.address || ''} title="Origen:" postalCode={address?.postalCode || '0000'} onPress={() => {
        onOpen();
      }} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeButton={<IconButton className="hidden sm:flex" ><FaXmark size="1.25rem" className="text-default-400 " /></IconButton>}
        size='2xl'
        classNames={{
          base: 'bg-transparent shadow-none sm:bg-content1 sm:shadow-small relative',
          backdrop: 'bg-content1/80 sm:bg-overlay/50',
          wrapper: '[--slide-enter:0px] [--slide-exit:-100px] justify-start items-start sm:justify-center sm:items-center ',
          closeButton: 'top-2 right-2'
        }}
      >
        <ModalContent className="p-0 m-0">
          {(onClose) => <>
            <ModalHeader className="hidden sm:flex">
              Direcciones origen
            </ModalHeader>
            <ModalBody className="p-4 sm:pt-0 h-fit ">
              <AutocompleteLocation
                allowedCountries={["CL", "US", "MX"]}
                defaultSelectedCountry="MX"
                onSelectedLocation={(location) => {

                  if (!location) return;

                  setAddress(location);
                  onClose();
                }}
                size="md"
                radius="sm"
                separateResults
                startContent={<Accordion variant="splitted" className="px-0">
                  <AccordionItem key="my-addressess" aria-label="Mis direcciones" title="Mis direcciones" >
                    <Listbox className="max-h-[300px] overflow-auto no-scrollbar" emptyContent="Sin resultados">
                      {myAddressess.map((item) => (
                        <ListboxItem
                          key={item.id}
                          aria-label={`${item.locality}, ${item.state}, ${item.country}`}
                          description={`${item.locality}, ${item.state}, ${item.country}`}
                          onPress={() => { console.log(item) }}
                          classNames={{ title: 'font-medium' }}
                        >
                          {item.postalCode} - {item.neighborhood}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  </AccordionItem>
                </Accordion>}
              />
            </ModalBody>
          </>}
        </ModalContent>
      </Modal >


    </>
  )
}


const myAddressess = [
  {
    id: 154716,
    street: 'calle ppal ',
    exteriorNumber: '15',
    interiorNumber: 'int 12',
    neighborhood: 'Juarez',
    postalCode: '06600',
    locality: 'Ciudad de Mexico',
    state: 'Ciudad de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'cfranco@pktuno.com',
    phone: '6681130709',
    isMainAddress: false,
    municipality: 'Cuauhtemoc',
    adviserId: 0,
    address1: 'calle ppal  #15, Juarez',
    completeAddress: 'calle ppal  #15, Juarez, Ciudad de Mexico, Ciudad de Mexico, 06600, MX',
    location: 'Ciudad de Mexico, Ciudad de Mexico'
  },
  {
    id: 155093,
    street: 'avenida allende',
    exteriorNumber: '5862 orien',
    interiorNumber: '',
    neighborhood: 'San Felipe',
    postalCode: '27085',
    locality: 'Torreon',
    state: 'Coahuila de Zaragoza',
    customerId: 6212,
    country: 'MX',
    email: 'fherneftali@hotmail.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Torreon',
    adviserId: 0,
    address1: 'avenida allende #5862 orien, San Felipe',
    completeAddress: 'avenida allende #5862 orien, San Felipe, Torreon, Coahuila de Zaragoza, 27085, MX',
    location: 'Torreon, Coahuila de Zaragoza'
  },
  {
    id: 165783,
    street: 'SIERRA GUADALCAZAR',
    exteriorNumber: '5883',
    interiorNumber: '',
    neighborhood: 'Moreno',
    postalCode: '32550',
    locality: 'Juarez',
    state: 'Chihuahua',
    customerId: 6212,
    country: 'MX',
    email: 'JFRAUSH@GMAIL.COM',
    phone: '6682233146',
    isMainAddress: false,
    municipality: 'Juarez',
    adviserId: 0,
    address1: 'SIERRA GUADALCAZAR #5883, Moreno',
    completeAddress: 'SIERRA GUADALCAZAR #5883, Moreno, Juarez, Chihuahua, 32550, MX',
    location: 'Juarez, Chihuahua'
  },
  {
    id: 169300,
    street: 'ZAPATA',
    exteriorNumber: 'S/N',
    interiorNumber: '',
    neighborhood: 'Centro Sinaloa',
    postalCode: '80000',
    locality: 'Culiacan Rosales',
    state: 'Sinaloa',
    customerId: 6212,
    country: 'MX',
    email: 'CFRANCO@PKTUNO.COM',
    phone: '6681130709',
    isMainAddress: false,
    municipality: 'Culiacan',
    adviserId: 0,
    address1: 'ZAPATA #S/N, Centro Sinaloa',
    completeAddress: 'ZAPATA #S/N, Centro Sinaloa, Culiacan Rosales, Sinaloa, 80000, MX',
    location: 'Culiacan Rosales, Sinaloa'
  },
  {
    id: 169744,
    street: 'calle 6',
    exteriorNumber: '510',
    interiorNumber: '',
    neighborhood: 'Centro',
    postalCode: '81000',
    locality: 'Guasave',
    state: 'Sinaloa',
    customerId: 6212,
    country: 'MX',
    email: 'jfraus@gmail.com',
    phone: '6682369412',
    isMainAddress: false,
    municipality: 'Guasave',
    adviserId: 0,
    address1: 'calle 6 #510, Centro',
    completeAddress: 'calle 6 #510, Centro, Guasave, Sinaloa, 81000, MX',
    location: 'Guasave, Sinaloa'
  },
  {
    id: 174092,
    street: 'av hercules',
    exteriorNumber: '301',
    interiorNumber: '19',
    neighborhood: 'Parque Industrial Poligono Empresarial',
    postalCode: '76220',
    locality: 'Queretaro',
    state: 'Queretaro',
    customerId: 6212,
    country: 'MX',
    email: 'fherneftali@hotmail.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Queretaro',
    adviserId: 0,
    address1: 'av hercules #301, Parque Industrial Poligono Empresarial',
    completeAddress: 'av hercules #301, Parque Industrial Poligono Empresarial, Queretaro, Queretaro, 76220, MX',
    location: 'Queretaro, Queretaro'
  },
  {
    id: 175556,
    street: 'ppal',
    exteriorNumber: '222',
    interiorNumber: '2',
    neighborhood: 'Del Carmen',
    postalCode: '98608',
    locality: 'Guadalupe',
    state: 'Zacatecas',
    customerId: 6212,
    country: 'MX',
    email: 'prueba@gmail.com',
    phone: '6682693145',
    isMainAddress: false,
    municipality: 'Guadalupe',
    adviserId: 0,
    address1: 'ppal #222, Del Carmen',
    completeAddress: 'ppal #222, Del Carmen, Guadalupe, Zacatecas, 98608, MX',
    location: 'Guadalupe, Zacatecas'
  },
  {
    id: 175790,
    street: 'conocida',
    exteriorNumber: '224',
    interiorNumber: '',
    neighborhood: 'Del Parque',
    postalCode: '98608',
    locality: 'Guadalupe',
    state: 'Zacatecas',
    customerId: 6212,
    country: 'MX',
    email: 'fherneftali@hotmail.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Guadalupe',
    adviserId: 0,
    address1: 'conocida #224, Del Parque',
    completeAddress: 'conocida #224, Del Parque, Guadalupe, Zacatecas, 98608, MX',
    location: 'Guadalupe, Zacatecas'
  },
  {
    id: 177122,
    street: 'AVENIDA DE LA FUENTE',
    exteriorNumber: '8649',
    interiorNumber: '',
    neighborhood: '',
    postalCode: '92154',
    locality: 'San Diego',
    state: 'California',
    customerId: 6212,
    country: 'US',
    email: 'CFRANCO@PKTUNO.COM',
    phone: '16195021823',
    isMainAddress: false,
    municipality: 'San Diego',
    adviserId: 0,
    address1: 'AVENIDA DE LA FUENTE #8649, ',
    completeAddress: 'AVENIDA DE LA FUENTE #8649, , San Diego, California, 92154, US',
    location: 'San Diego, California'
  },
  {
    id: 179468,
    street: 'Tlacopan',
    exteriorNumber: '406',
    interiorNumber: '',
    neighborhood: 'Santa Isabel Tola',
    postalCode: '07010',
    locality: 'Ciudad de Mexico',
    state: 'Ciudad de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'cfranco@pktuno.com',
    phone: '6681130709',
    isMainAddress: false,
    municipality: 'Gustavo A. Madero',
    adviserId: 0,
    address1: 'Tlacopan #406, Santa Isabel Tola',
    completeAddress: 'Tlacopan #406, Santa Isabel Tola, Ciudad de Mexico, Ciudad de Mexico, 07010, MX',
    location: 'Ciudad de Mexico, Ciudad de Mexico'
  },
  {
    id: 182371,
    street: 'Valle de atemajac',
    exteriorNumber: '1398',
    interiorNumber: '',
    neighborhood: 'Las Aguilas',
    postalCode: '45080',
    locality: 'Zapopan',
    state: 'Jalisco',
    customerId: 6212,
    country: 'MX',
    email: 'cfranco@pktuno.com',
    phone: '6681130709',
    isMainAddress: false,
    municipality: 'Zapopan',
    adviserId: 0,
    address1: 'Valle de atemajac #1398, Las Aguilas',
    completeAddress: 'Valle de atemajac #1398, Las Aguilas, Zapopan, Jalisco, 45080, MX',
    location: 'Zapopan, Jalisco'
  },
  {
    id: 182749,
    street: 'CALLE PRINCIPA',
    exteriorNumber: '15',
    interiorNumber: '',
    neighborhood: 'Trabajadores',
    postalCode: '66149',
    locality: 'Ciudad Santa Catarina',
    state: 'Nuevo Leon',
    customerId: 6212,
    country: 'MX',
    email: 'CORREO@DMAIN.COM',
    phone: '6688121212',
    isMainAddress: false,
    municipality: 'Santa Catarina',
    adviserId: 0,
    address1: 'CALLE PRINCIPA #15, Trabajadores',
    completeAddress: 'CALLE PRINCIPA #15, Trabajadores, Ciudad Santa Catarina, Nuevo Leon, 66149, MX',
    location: 'Ciudad Santa Catarina, Nuevo Leon'
  },
  {
    id: 183087,
    street: 'calle 6',
    exteriorNumber: '510',
    interiorNumber: '',
    neighborhood: 'Nueva Era',
    postalCode: '88136',
    locality: 'Nuevo Laredo',
    state: 'Tamaulipas',
    customerId: 6212,
    country: 'MX',
    email: 'prueba@gmail.com',
    phone: '6623784512',
    isMainAddress: false,
    municipality: 'Nuevo Laredo',
    adviserId: 0,
    address1: 'calle 6 #510, Nueva Era',
    completeAddress: 'calle 6 #510, Nueva Era, Nuevo Laredo, Tamaulipas, 88136, MX',
    location: 'Nuevo Laredo, Tamaulipas'
  },
  {
    id: 184407,
    street: 'CIPRES',
    exteriorNumber: '26',
    interiorNumber: '',
    neighborhood: 'Viveros de Xalostoc',
    postalCode: '55340',
    locality: 'Ecatepec de Morelos',
    state: 'Estado de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'PRUEBA@GMAIL.COM',
    phone: '6623784512',
    isMainAddress: false,
    municipality: 'Ecatepec de Morelos',
    adviserId: 0,
    address1: 'CIPRES #26, Viveros de Xalostoc',
    completeAddress: 'CIPRES #26, Viveros de Xalostoc, Ecatepec de Morelos, Estado de Mexico, 55340, MX',
    location: 'Ecatepec de Morelos, Estado de Mexico'
  },
  {
    id: 184891,
    street: 'PUERTA DE HIERRO',
    exteriorNumber: '1025',
    interiorNumber: '100',
    neighborhood: 'Puerta de Hierro',
    postalCode: '45116',
    locality: 'Zapopan',
    state: 'Jalisco',
    customerId: 6212,
    country: 'MX',
    email: 'fvalenzuela@pktuno.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Zapopan',
    adviserId: 0,
    address1: 'PUERTA DE HIERRO #1025, Puerta de Hierro',
    completeAddress: 'PUERTA DE HIERRO #1025, Puerta de Hierro, Zapopan, Jalisco, 45116, MX',
    location: 'Zapopan, Jalisco'
  },
  {
    id: 186090,
    street: 'av texcoco',
    exteriorNumber: '871',
    interiorNumber: '',
    neighborhood: 'San Lorenzo Xicotencatl',
    postalCode: '09130',
    locality: 'Ciudad de Mexico',
    state: 'Ciudad de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'fherneftali@hotmail.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Iztapalapa',
    adviserId: 0,
    address1: 'av texcoco #871, San Lorenzo Xicotencatl',
    completeAddress: 'av texcoco #871, San Lorenzo Xicotencatl, Ciudad de Mexico, Ciudad de Mexico, 09130, MX',
    location: 'Ciudad de Mexico, Ciudad de Mexico'
  },
  {
    id: 203311,
    street: 'Edmundo gamez',
    exteriorNumber: '3555',
    interiorNumber: 'int 12',
    neighborhood: 'Francisco Villa',
    postalCode: '44970',
    locality: 'Guadalajara',
    state: 'Jalisco',
    customerId: 6212,
    country: 'MX',
    email: 'micorreo@gmail.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Guadalajara',
    adviserId: 0,
    address1: 'Edmundo gamez #3555, Francisco Villa',
    completeAddress: 'Edmundo gamez #3555, Francisco Villa, Guadalajara, Jalisco, 44970, MX',
    location: 'Guadalajara, Jalisco'
  },
  {
    id: 211478,
    street: 'Arco de julio cesar',
    exteriorNumber: '356',
    interiorNumber: '',
    neighborhood: 'Arcos de Zapopan 1a. Seccion',
    postalCode: '45130',
    locality: 'Zapopan',
    state: 'Jalisco',
    customerId: 6212,
    country: 'MX',
    email: 'prueba@gmail.com',
    phone: '66983612',
    isMainAddress: false,
    municipality: 'Zapopan',
    adviserId: 0,
    address1: 'Arco de julio cesar #356, Arcos de Zapopan 1a. Seccion',
    completeAddress: 'Arco de julio cesar #356, Arcos de Zapopan 1a. Seccion, Zapopan, Jalisco, 45130, MX',
    location: 'Zapopan, Jalisco'
  },
  {
    id: 212908,
    street: 'conocida',
    exteriorNumber: '464',
    interiorNumber: '',
    neighborhood: 'Los Olvera',
    postalCode: '76904',
    locality: 'El Pueblito',
    state: 'Queretaro',
    customerId: 6212,
    country: 'MX',
    email: 'fvalenzuela@pktuno.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Corregidora',
    adviserId: 0,
    address1: 'conocida #464, Los Olvera',
    completeAddress: 'conocida #464, Los Olvera, El Pueblito, Queretaro, 76904, MX',
    location: 'El Pueblito, Queretaro'
  },
  {
    id: 215493,
    street: 'calle 40',
    exteriorNumber: '449',
    interiorNumber: '',
    neighborhood: 'Los Pinos',
    postalCode: '97138',
    locality: 'Merida',
    state: 'Yucatan',
    customerId: 6212,
    country: 'MX',
    email: 'jfraush.g@hotmail.com',
    phone: '6682456310',
    isMainAddress: false,
    municipality: 'Merida',
    adviserId: 0,
    address1: 'calle 40 #449, Los Pinos',
    completeAddress: 'calle 40 #449, Los Pinos, Merida, Yucatan, 97138, MX',
    location: 'Merida, Yucatan'
  },
  {
    id: 227219,
    street: 'damian carmona',
    exteriorNumber: '1820',
    interiorNumber: '',
    neighborhood: 'Santiago del Rio',
    postalCode: '78049',
    locality: 'San Luis Potosi',
    state: 'San Luis Potosi',
    customerId: 6212,
    country: 'MX',
    email: 'proveedores@cincocontinentes.com',
    phone: '8134598429',
    isMainAddress: false,
    municipality: 'San Luis Potosi',
    adviserId: 0,
    address1: 'damian carmona #1820, Santiago del Rio',
    completeAddress: 'damian carmona #1820, Santiago del Rio, San Luis Potosi, San Luis Potosi, 78049, MX',
    location: 'San Luis Potosi, San Luis Potosi'
  },
  {
    id: 228748,
    street: 'Blvd Antonio Rosales',
    exteriorNumber: '976',
    interiorNumber: '',
    neighborhood: 'Jardin',
    postalCode: '81230',
    locality: 'Los Mochis',
    state: 'Sinaloa',
    customerId: 6212,
    country: 'MX',
    email: 'cfranco@pktuno.com',
    phone: '668 222 4806',
    isMainAddress: false,
    municipality: 'Ahome',
    adviserId: 0,
    address1: 'Blvd Antonio Rosales #976, Jardin',
    completeAddress: 'Blvd Antonio Rosales #976, Jardin, Los Mochis, Sinaloa, 81230, MX',
    location: 'Los Mochis, Sinaloa'
  },
  {
    id: 235235,
    street: 'principal',
    exteriorNumber: '2020',
    interiorNumber: '20',
    neighborhood: 'Del Valle Sect Oriente',
    postalCode: '66269',
    locality: 'San Pedro Garza Garcia',
    state: 'Nuevo Leon',
    customerId: 6212,
    country: 'MX',
    email: 'prueba@gmail.com',
    phone: '6688963201',
    isMainAddress: false,
    municipality: 'San Pedro Garza Garcia',
    adviserId: 0,
    address1: 'principal #2020, Del Valle Sect Oriente',
    completeAddress: 'principal #2020, Del Valle Sect Oriente, San Pedro Garza Garcia, Nuevo Leon, 66269, MX',
    location: 'San Pedro Garza Garcia, Nuevo Leon'
  },
  {
    id: 237744,
    street: 'ppal',
    exteriorNumber: '2052',
    interiorNumber: '102',
    neighborhood: 'Geovillas de San Mateo',
    postalCode: '50227',
    locality: 'Toluca',
    state: 'Estado de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'prueba@gmail.com',
    phone: '6682365201',
    isMainAddress: false,
    municipality: 'Toluca',
    adviserId: 0,
    address1: 'ppal #2052, Geovillas de San Mateo',
    completeAddress: 'ppal #2052, Geovillas de San Mateo, Toluca, Estado de Mexico, 50227, MX',
    location: 'Toluca, Estado de Mexico'
  },
  {
    id: 239174,
    street: 'tennyson',
    exteriorNumber: '18',
    interiorNumber: '',
    neighborhood: 'Polanco IV Seccion',
    postalCode: '11550',
    locality: 'Ciudad de Mexico',
    state: 'Ciudad de Mexico',
    customerId: 6212,
    country: 'MX',
    email: 'correo@pktuno.com',
    phone: '6681210104',
    isMainAddress: false,
    municipality: 'Miguel Hidalgo',
    adviserId: 0,
    address1: 'tennyson #18, Polanco IV Seccion',
    completeAddress: 'tennyson #18, Polanco IV Seccion, Ciudad de Mexico, Ciudad de Mexico, 11550, MX',
    location: 'Ciudad de Mexico, Ciudad de Mexico'
  }
]


