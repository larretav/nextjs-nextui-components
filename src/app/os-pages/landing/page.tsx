import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function OsLandingPage() {
  return (
    <div className="w-dvw h-dvh relative bg-gradient-to-b from-green-600 to-green-500 z-0">
      <div className="w-full h-full absolute bg-onsite-pattern bg-cover opacity-10 -z-10" />

      <div className="flex flex-col items-center gap-12 pt-16 px-5 text-white">

        <div className="flex flex-col  gap-1">
          <span className="text-2xl text-center md:text-3xl">¡Hola!</span>
          <span className="text-xl text-center md:text-2xl">Que gusto tenerte por aquí</span>
        </div>

        <div className="flex flex-col items-center gap-2 py-7">
          <span className="text-2xl font-semibold text-center md:text-3xl">Bienvenido a</span>
          <div className="p-5 rounded-2xl bg-white">
            <Image
              width={200}
              height={50}
              src={OnSiteLogoComplete}
              alt="onsite-logo"
              className="w-40 h-10 md:w-56 md:h-16"

            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-center text-xl font-semibold md:text-2xl">El primer centro de envíos cero emisiones de México</span>
          <span className="text-center text-lg md:text-xl">Cotiza, administra y envía</span>
        </div>

        <Button
          variant="solid"
          color="default"
          size="lg"
          radius="sm"
          as={Link}
          href="/os-pages/login"
          className="bg-white text-black">
          ¡Comienza ya!
        </Button>
      </div>
    </div>
  );
}