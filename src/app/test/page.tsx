import { Button, IconButton } from "@/components"
import { FaXmark } from "react-icons/fa6"
import { ModalWithTabs } from "./_components/ModalWithTabs"


type Props = {}

export default function page({ }: Props) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-full gap-5 max-w-6xl items-center p-4">

        <div className="w-[450px] h-fit shadow-lg rounded-2xl relative overflow-hidden">
          <div className="w-full h-full py-1 bg-gradient-to-r from-red-300 via-violet-800 to-teal-600" />
          <div className="w-full h-full flex flex-col p-5 pt-14 relative justify-center items-center gap-4 bg-white dark:bg-zinc-900 ">
            <IconButton className="absolute top-3 right-2" ><FaXmark size="1.5rem" className="text-zinc-950 dark:text-zinc-200 " /></IconButton>
            <p className="text-zinc-950 dark:text-zinc-200 text-center font-bold text-3xl">Perzonaliza tu feed</p>
            <p className="text-zinc-500 dark:text-zinc-500 text-center font-normal text-lg">Elige algunos videos para indicarnos lo que te gusta</p>
            <Button variant="solid" size="lg" radius="full" fullWidth className="bg-zinc-950 dark:bg-zinc-800  text-zinc-50 dark:text-zinc-200" >Comenzar</Button>
          </div>
        </div>
        <ModalWithTabs />
      </div>
    </div>
  )
}