'use client';
import { AddressCardInput, AutocompleteLocation, Drawer, IconButton, IconTitleTab, MobileToolbar } from '@/components'
import { cn } from '@/lib/utils';
import { AutocompleteLocationModel } from '@/models';
import { removeAccents } from '@/utils';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Input } from '@nextui-org/input';
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox';
import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { Tab, Tabs } from '@nextui-org/tabs';
import React, { forwardRef, Key, ReactElement, ReactHTMLElement, useEffect, useRef, useState } from 'react'
import { FaArrowLeft, FaChevronLeft, FaMagnifyingGlass, FaMapLocationDot, FaUserGroup, FaXmark } from 'react-icons/fa6';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { customersDataTest } from '../helpers/customers-data.helper';
import { addressessDataTest } from '../helpers/addressess-data.helper';
// Import Swiper styles
import "swiper/css";
import { Popover, PopoverTrigger, PopoverContent, PopoverProps } from '@nextui-org/popover';
import { CircleExclamationOutlined } from '@/components/icons';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { Button } from '@nextui-org/button';
import { VisuallyHidden } from '@react-aria/visually-hidden';

type Customer = typeof customersDataTest[0];


export const OSSetDestAddressCard = () => {

  const [address, setAddress] = useState<AutocompleteLocationModel>();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState<Key>('customers');
  const [selectedCustomer, setSelectedCustomer] = useState<Customer>();
  const [inputVal, setInputVal] = useState('');

  const swiperRef = useRef<SwiperRef>(null);
  const popoverRef = useRef(null)
  const listboxRef = useRef<HTMLButtonElement | null>(null);

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    listboxRef.current?.click();
  };

  useEffect(() => {
    if (!inputVal.trim()) {
      setCustomers(customersDataTest);
    }

    setCustomers(customersDataTest.filter(customer => removeAccents(customer.fullName).toLowerCase().includes(removeAccents(inputVal).toLowerCase())));
  }, [inputVal])


  useEffect(() => {
    setCustomers(customersDataTest);
  }, [])


  return (
    <>
      <AddressCardInput address={address?.address || ''} title="Destino:" postalCode={address?.postalCode || '0000'} onPress={() => {
        onOpen();
      }} />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeButton={<IconButton tabIndex={-1} ><FaXmark size="1.25rem" className="text-default-400 " /></IconButton>}
        size='2xl'
        backdrop="blur"
        classNames={{
          base: 'bg-transparent shadow-none sm:bg-content1 sm:shadow-small relative',
          backdrop: 'bg-content1/60 sm:bg-overlay/50',
          wrapper: '[--slide-enter:0px] [--slide-exit:-100px] justify-start items-start sm:justify-center sm:items-center ',
          closeButton: 'top-2 right-2 hidden sm:flex'
        }}
      >
        <ModalContent className="p-0 m-0 ">
          {(onClose) => <>

            <ModalHeader className="hidden sm:flex">
              Direccion destino
            </ModalHeader>

            <ModalBody className="p-2 sm:p-4 sm:pt-0 h-fit sm:min-h-[500px]">
              <Tabs
                aria-label="Pestañas de direcciones"
                selectedKey={selectedTab.toString()}
                onSelectionChange={setSelectedTab}
                classNames={{ tabList: 'w-full', base: 'w-full ', panel: 'p-0' }}
                radius="sm"
              >
                <Tab key="addressess" title={<IconTitleTab title="Direcciones" icon={<FaMapLocationDot size="1.25rem" />} />} className="px-1  " >
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
                  />
                </Tab>


                <Tab key="customers" title={<IconTitleTab title="Clientes" icon={<FaUserGroup size="1.25rem" />} />}  >
                  <Swiper ref={swiperRef} allowTouchMove={false} spaceBetween={20} className="[&>div>div]:p-1"  >

                    {/* Listado de clientes */}
                    <SwiperSlide >
                      <div className="flex flex-col gap-2" >
                        <VisuallyHidden>
                          <Button ref={listboxRef} tabIndex={-1} />
                        </VisuallyHidden>

                        <Input
                          fullWidth
                          variant="bordered"
                          startContent={<FaMagnifyingGlass size="1rem" className="text-default-400" />}
                          placeholder="Buscar..."
                          classNames={{
                            inputWrapper: 'bg-content1 dark:bg-content2',
                          }}
                          value={inputVal}
                          onValueChange={setInputVal}
                        />
                        <Listbox
                          className="bg-content1 dark:bg-content2 shadow p-3 max-h-[400px] overflow-auto max-sm:no-scrollbar rounded-medium pointer"
                          emptyContent="Sin resultados"
                          items={customers}
                        >
                          {
                            (item) => (
                              <ListboxItem
                                tabIndex={item.hasErrors ? -1 : 0}
                                key={item.id}
                                aria-label={`${item.fullName}`}
                                description={`${item.street} ${item.exteriorNumber}, ${item.neighborhood}, ${item.postalCode} ${item.city}, ${item.state}, ${item.country}`}
                                isReadOnly={item.hasErrors}
                                onPress={() => {
                                  if (item.hasErrors) return;
                                  setSelectedCustomer(item);
                                  handleNext();
                                }}
                                classNames={{
                                  title: 'font-medium',
                                  wrapper: clsx({ "opacity-disabled pointer-events-none": item.hasErrors }),
                                  base: clsx({ "data-[hover=true]:bg-transparent cursor-default": item.hasErrors }),
                                  description: clsx({ "group-hover:text-foreground-500 ": item.hasErrors }),
                                  selectedIcon: 'overflow-visible',
                                }}
                                endContent={item.hasErrors && <WarningPopover pageName="Clientes" href="#clientes" />}
                              >
                                {item.fullName}
                              </ListboxItem>)

                          }
                        </Listbox>
                      </div>
                    </SwiperSlide>

                    {/* Direcciones de cliente seleccionado */}
                    <SwiperSlide >
                      <div className="flex flex-col gap-2" >
                        <MobileToolbar
                          title="Direcciones de Pepe"
                          startContent={<IconButton onPress={handlePrev}><FaChevronLeft size="1rem" className="text-default-500" /></IconButton>}
                          className="bg-content1 dark:bg-content2 rounded-small"
                        />
                        <Input
                          fullWidth
                          variant="bordered"
                          startContent={<FaMagnifyingGlass size="1rem" className="text-default-400" />}
                          placeholder="Buscar..."
                          classNames={{
                            inputWrapper: 'bg-content1 dark:bg-content2',
                          }}
                          value={inputVal}
                          onValueChange={setInputVal}
                          radius="sm"
                        />
                        <Listbox
                          emptyContent="Sin resultados"
                          className="bg-content1 dark:bg-content2 rounded-medium shadow max-h-[400px] sm:max-h-72 overflow-auto  max-sm:no-scrollbar"
                          items={addressessDataTest}
                        >
                          {(item) => (
                            <ListboxItem
                              key={item.id}
                              aria-label={`${item.neighborhood}, ${item.postalCode} ${item.locality}, ${item.state}, ${item.country}`}
                              description={`${item.neighborhood}, ${item.postalCode} ${item.locality}, ${item.state}, ${item.country}`}
                              onPress={() => { console.log(item) }}
                              classNames={{
                                title: 'font-medium',
                                wrapper: clsx({ "opacity-disabled pointer-events-none": item.hasErrors }),
                                base: clsx({ "data-[hover=true]:bg-transparent cursor-default": item.hasErrors }),
                                description: clsx({ "group-hover:text-foreground-500 ": item.hasErrors }),
                                selectedIcon: 'overflow-visible',
                              }}
                              endContent={item.hasErrors && <WarningPopover pageName="Direcciones" href="#direcciones" />}
                            >
                              {item.street} {item.exteriorNumber}
                            </ListboxItem>
                          )}
                        </Listbox>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </Tab>

              </Tabs>
            </ModalBody>
          </>}
        </ModalContent >
      </Modal >
    </>
  )
}



const WarningPopover = ({ href = '#', pageName }: { href?: string, pageName: string }) => {
  return (
    <Popover showArrow={true} color="warning" placement="left" >
      <PopoverTrigger>
        <div className="cursor-pointer" > <CircleExclamationOutlined size="1.25rem" color="warning" /> </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-1 ">
          <div className="text-small font-bold">Algunos datos no son correctos</div>
          <div className="text-small">Puedes ir a <Link href={href} underline="always" className="font-bold text-black" showAnchorIcon>{pageName}</Link> para corregirlos</div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default OSSetDestAddressCard