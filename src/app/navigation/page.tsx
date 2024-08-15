import { Button } from "@nextui-org/button";
import { DrawerButtons } from "./_components/drawer/DrawerButtons";
import { OSBottomNavBar } from "./_components";
import { OSNavbar } from "./_components/nav-bar/OSNavbar";

export default function NavigationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
      <div className=" box-border rounded-2xl overflow-hidden">
        <OSBottomNavBar />
      </div>
      <div>
        <OSNavbar />
      </div>
      <div >
        <DrawerButtons />
      </div>
      {/* <div className="p-2 box-border rounded-xl"> */}
      {/* <OSBottomBar /> */}
      {/* </div> */}
      {/* <div className="p-2 box-border flex flex-col gap-4">
        <Button color="primary" variant="bordered" fullWidth>Test</Button>
        <Button color="primary" variant="faded" fullWidth>Test</Button>
        <Button color="primary" variant="flat" fullWidth>Test</Button>
        <Button color="primary" variant="ghost" fullWidth>Test</Button>
        <Button color="primary" variant="light" fullWidth>Test</Button>
        <Button color="primary" variant="shadow" fullWidth>Test</Button>
        <Button color="primary" variant="solid" fullWidth>Test</Button>
      </div>
      <div className="p-2 box-border flex flex-col gap-4">
      <Button color="secondary" variant="bordered"   fullWidth>Test</Button>
        <Button color="secondary" variant="faded"   fullWidth>Test</Button>
        <Button color="secondary" variant="flat"  fullWidth>Test</Button>
        <Button color="secondary" variant="ghost"   fullWidth>Test</Button>
        <Button color="secondary" variant="light"   fullWidth>Test</Button>
        <Button color="secondary" variant="shadow" fullWidth>Test</Button>
        <Button color="secondary" variant="solid" fullWidth>Test</Button>
      </div> */}
    </div>
  );
}