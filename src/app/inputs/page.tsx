
import {  PageTitle, ThemeSwitch, ThemeSwitchTabs } from "@/components";
import BoxCounter from "@/components/inputs/BoxCounter";
import SimpleCounter from "@/components/inputs/SimpleCounter";
import { Switch } from "@nextui-org/switch";
import { SwitchInputs } from "./_components/SwitchInputs";
import { AutocompleteInputs } from "./_components/AutocompleteInputs";
import { RadioInputs } from "./_components/RadioInputs";
import { OSCardInputs } from "./_components/OSCardInputs";

export default function InputsPage() {

  const baseClassname = "sm:p-2 flex flex-col gap-3 font-medium";

  return (
    <div className="flex flex-col gap-10 px-2 py-3 sm:px-6">
      <PageTitle text="Input Components" />

      <div className={baseClassname} id="counters">
        <p>Counters</p>
        <div className="flex gap-4 items-center mx-3">
          <SimpleCounter />
          <BoxCounter />
        </div>
      </div>

      <div className={baseClassname} id="switch">
        <p>Switch</p>
        <div className="mx-6">
          <SwitchInputs />
        </div>
      </div>

      <div className={baseClassname} id="card-inputs">
        <p>Card inputs</p>
        <div className="flex gap-4 items-center mx-3">
          <OSCardInputs />
        </div>
      </div>

      <div className={baseClassname} id="radios">
        <p>Radios</p>
        <div className="sm:mx-6">
          <RadioInputs />
        </div>
      </div>

      <div className={baseClassname} id="autocomplete">
        <p >Autocomplete</p>
        <div className="sm:mx-6">
          <AutocompleteInputs />
        </div>
      </div>
    </div>
  );
}