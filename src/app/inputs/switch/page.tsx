import { PageTitle, ThemeSwitch, ThemeSwitchTabs } from "@/components";
import { Switch } from "@nextui-org/switch";

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Switch" />
      <div className="grid grid-cols-2 md:grid-cols-12 gap-2 ">
        <div className="container-component-item "><ThemeSwitch /></div>
        <div className="container-component-item "><Switch /></div>
        <div className="container-component-item col-span-2"><ThemeSwitchTabs /></div>
      </div>
    </div>
  );
}




