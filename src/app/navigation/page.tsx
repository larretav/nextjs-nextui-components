import { BottomNavigation } from "./_components";

export default function NavigationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <div>
        <BottomNavigation />
      </div>
      <div>
        <BottomNavigation />
      </div>
    </div>
  );
}