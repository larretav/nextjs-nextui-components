import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import { RegisterForm } from "./_components/RegisterForm";

export default function OsRegisterPage() {
  return (
    <div className="relative h-full">
      <div className="flex absolute top-0 right-0 z-0 justify-center pt-4 w-full h-80 bg-gradient-to-b from-green-600 to-green-500 rounded-b-2xl md:relative md:items-center md:pt-0 md:w-9/12 md:h-full md:rounded-none md:rounded-r-[3rem]">
        <div className="absolute w-full h-full bg-cover md:bg-contain bg-onsite-pattern opacity-15 -z-10" />

        <div className="hidden flex-col gap-5 items-center py-7 md:flex">
          <span className="text-2xl font-semibold text-center md:text-3xl">Bienvenido a</span>
          <div className="p-5 bg-white rounded-2xl shadow-2xl">
            <Image
              width={200}
              height={50}
              src={OnSiteLogoComplete}
              alt="onsite-logo"
              className="w-40 h-10 md:w-56 md:h-16"
            />
          </div>
          <div className="hidden w-5/6 text-xl font-light text-center md:block md:text-2xl">El primer centro de envíos cero emisiones de <strong>México</strong></div>

        </div>

      </div>

      <div className="flex relative flex-col gap-10 justify-center items-center px-4 pt-12 pb-3 md:absolute md:top-0 md:bottom-0 md:right-5 md:p-0 md:m-auto h-fit">
        <div className="block p-5 bg-white rounded-2xl shadow-2xl md:hidden w-fit">
          <Image
            width={200}
            height={50}
            src={OnSiteLogoComplete}
            alt="onsite-logo"
            className="w-40 h-10 md:w-56 md:h-16"
          />
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}