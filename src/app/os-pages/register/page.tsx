import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import { RegisterForm } from "./_components/RegisterForm";

export default function OsRegisterPage() {
  return (
    <div className="h-full relative">
      <div className="h-80 absolute top-0 right-0 w-full flex pt-4 justify-center bg-gradient-to-b from-green-600 to-green-500 z-0 rounded-b-2xl md:pt-0 md:h-full md:relative md:items-center md:rounded-none md:rounded-r-[3rem] md:w-9/12 ">
        <div className="w-full h-full absolute bg-onsite-pattern bg-cover md:bg-contain opacity-15 -z-10 " />

        <div className="flex-col items-center gap-5 py-7 hidden md:flex">
          <span className="text-2xl font-semibold text-center md:text-3xl ">Bienvenido a</span>
          <div className="p-5 rounded-2xl bg-white shadow-2xl ">
            <Image
              width={200}
              height={50}
              src={OnSiteLogoComplete}
              alt="onsite-logo"
              className="w-40 h-10 md:w-56 md:h-16 "
            />
          </div>
          <div className="text-xl font-light text-center md:text-2xl hidden md:block w-5/6 ">El primer centro de envíos cero emisiones de <strong>México</strong></div>

        </div>

      </div>

      <div className="px-4 pb-3 pt-12  h-fit flex flex-col justify-center items-center gap-10 relative md:absolute md:top-0 md:bottom-0 md:m-auto md:right-5 md:p-0">
        <div className="w-fit p-5 rounded-2xl bg-white shadow-2xl  block md:hidden">
          <Image
            width={200}
            height={50}
            src={OnSiteLogoComplete}
            alt="onsite-logo"
            className="w-40 h-10 md:w-56 md:h-16 "
          />
        </div>

        <RegisterForm />
      </div>
    </div>
  );
}