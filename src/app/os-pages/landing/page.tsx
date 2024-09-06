import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import { Button } from "@nextui-org/button";

export default function OsLandingPage() {
  return (
    <div className="w-dvw h-dvh relative bg-gradient-to-b from-green-600 to-green-500 z-0">
      {/* <div className="w-full h-full absolute bg-onsite-pattern bg-contain opacity-10 z-10"></div> */}

      <div className="flex flex-col items-center gap-12 pt-16 px-5 text-white z-400">

        <div className="flex flex-col  gap-1">
          <span className="text-2xl text-center">¡Hola!</span>
          <span className="text-xl text-center">Que gusto tenerte por aquí</span>
        </div>

        <div className="flex flex-col items-center gap-4 py-7">
          <span className="text-2xl font-semibold text-center">Bienvenido a</span>
          <div className="p-5 rounded-2xl bg-white w-fit">
            <Image
              width={200}
              height={60}
              src={OnSiteLogoComplete}
              alt="onsite-logo"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-center text-xl font-semibold">El primer centro de envíos cero emisiones de México</span>
          <span className="text-center text-lg">Cotiza, administra y envía</span>
        </div>

        <Button variant="solid" color="default" size="lg">
          ¡Comienza ya!
        </Button>
      </div>
    </div>
  );
}