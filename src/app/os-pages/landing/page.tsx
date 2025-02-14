import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function OsLandingPage() {
  return (
    <div className="relative z-0 bg-gradient-to-b from-green-600 to-green-500 w-dvw h-dvh">
      <div className="absolute w-full h-full bg-cover opacity-10 bg-onsite-pattern -z-10" />

      <div className="flex flex-col gap-12 items-center px-5 pt-16 text-white">

        <div className="flex flex-col gap-1">
          <span className="text-2xl text-center md:text-3xl">¡Hola!</span>
          <span className="text-xl text-center md:text-2xl">Que gusto tenerte por aquí</span>
        </div>

        <div className="flex flex-col gap-2 items-center py-7">
          <span className="text-2xl font-semibold text-center md:text-3xl">Bienvenido a</span>
          <div className="p-5 bg-white rounded-2xl">
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
          <span className="text-xl font-semibold text-center md:text-2xl">El primer centro de envíos cero emisiones de México</span>
          <span className="text-lg text-center md:text-xl">Cotiza, administra y envía</span>
        </div>

        <Button
          variant="solid"
          color="default"
          size="lg"
          radius="sm"
          as={Link}
          href="/os-pages/login"
          className="text-black bg-white">
          ¡Comienza ya!
        </Button>
      </div>
    </div>
  );
}