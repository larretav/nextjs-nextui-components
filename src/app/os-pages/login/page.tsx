import Image from "next/image";
import OnSiteLogoComplete from "@/assets/onsite-logo-complete.svg";
import LoginForm from "./_components/LoginForm";

export default function OsLoginPage() {
  return (
    <div className="w-dvw h-dvh relative">
      <div className="h-2/5 md:h-full relative flex md:items-center pt-4 md:pt-0 justify-center  bg-gradient-to-b from-green-600 to-green-500 z-0 rounded-b-2xl md:rounded-none md:rounded-r-[3rem] md:w-5/6 ">
        <div className="w-full h-full absolute bg-onsite-pattern bg-cover md:bg-contain opacity-15 -z-10" />

        <div className="flex flex-col items-center gap-5 py-7 ">
          <span className="text-2xl font-semibold text-center md:text-3xl hidden md:block">Bienvenido a</span>
          <div className="p-5 rounded-2xl bg-white shadow-2xl">
            <Image
              width={200}
              height={50}
              src={OnSiteLogoComplete}
              alt="onsite-logo"
              className="w-40 h-10 md:w-56 md:h-16"
            />
          </div>
          <div className="text-xl font-light text-center md:text-2xl hidden md:block w-5/6 ">El primer centro de envíos cero emisiones de <strong>México</strong></div>

        </div>

      </div>

      <div className="w-11/12 h-fit  flex flex-col absolute  md:w-fit top-[25%] right-0 left-0 m-auto md:top-0 md:bottom-0 md:right-[20] md:left-auto">
        <LoginForm />
      </div>
    </div>
  );
}