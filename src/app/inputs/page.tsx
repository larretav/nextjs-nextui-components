import { PageTitle, ThemeSwitch, ThemeSwitchTabs } from "@/components";
import BoxCounter from "@/components/inputs/BoxCounter";
import SimpleCounter from "@/components/inputs/SimpleCounter";
import { Switch } from "@nextui-org/switch";

export default function InputsPage() {
  return (
    <div className="flex flex-col gap-3 py-3 px-6">
      <PageTitle text="Input Components" />
      <p className="font-medium p-2">SimpleCounter</p>
      <div className="w-min">
      <SimpleCounter/>
      </div>
      <p className="font-medium p-2">Box Counter</p>
      <div className="w-min">
      <BoxCounter/>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-12">
        <div className="container-component-item"><ThemeSwitch /></div>
        <div className="container-component-item"><Switch /></div>
        <div className="col-span-2 container-component-item"><ThemeSwitchTabs /></div>
      </div>
    </div>
  );
}