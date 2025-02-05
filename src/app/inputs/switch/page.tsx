import { PageTitle, ThemeSwitch, ThemeSwitchTabs } from "@/components";
import { Switch } from "@heroui/switch";

export default function SwitchPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Switch" />
      <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
        <div className="container-component-item"><ThemeSwitch /></div>
        <div className="container-component-item"><Switch /></div>
        <div className="col-span-2 container-component-item"><ThemeSwitchTabs /></div>
      </div>
    </div>
  );
}




