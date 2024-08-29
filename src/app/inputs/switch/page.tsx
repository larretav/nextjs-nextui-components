import { ThemeSwitch, ThemeSwitchTabs } from "@/components";
import { Switch } from "@nextui-org/switch";
import { ThemeSwitchTab } from "../components/TabsExample";

export default function SwitchPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">
      <div className="container-component-item "><ThemeSwitch /></div>
      <div className="container-component-item "><Switch /></div>
      <div className="container-component-item "><ThemeSwitchTabs /></div>
      <div className="container-component-item col-span-5 "><ThemeSwitchTab /></div>
    </div>
  );
}




