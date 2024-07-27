import { BottomNavigation } from "./_components";
import { BottomNavigationBar } from "./_components/bottom-nav-bar/BottomNavigationBar";
import OSBottomBar from "./_components/bottom-navigation/OSBottomBar";

export default function NavigationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
      <div className="p-2 box-border rounded-xl">
        <BottomNavigation />
      </div>
      <div className="p-2 box-border rounded-xl">
        <OSBottomBar />
      </div>
    </div>
  );
}