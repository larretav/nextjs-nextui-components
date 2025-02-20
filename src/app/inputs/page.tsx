
import { PageTitle, SwipperSelect, ThemeSwitch, ThemeSwitchTabs } from "@/components";
import BoxCounter from "@/components/inputs/BoxCounter";
import SimpleCounter from "@/components/inputs/SimpleCounter";
import { Switch } from "@heroui/switch";
import { SwitchInputs } from "./_components/SwitchInputs";
import { AutocompleteInputs } from "./_components/AutocompleteInputs";
import { RadioInputs } from "./_components/RadioInputs";
import { OSCardInputs } from "./_components/OSCardInputs";
import { FaCircle, FaImage } from "react-icons/fa6";

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

      <div className={baseClassname} id="select">
        <p>Selects</p>
        <div className="mx-6 flex gap-4">
          <SwipperSelect direction="vertical" items={[
            {
              icon: '/assets/package-type/envelope.png'
            },
            {
              icon: '/assets/package-type/box.png'
            },
            {
              icon: '/assets/package-type/pallet.png'
            },

          ]} />
          <SwipperSelect direction="horizontal" items={[
            {
              icon: '/assets/package-type/envelope.png'
            },
            {
              icon: '/assets/package-type/box.png'
            },
            {
              icon: '/assets/package-type/pallet.png'
            },

          ]} />
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