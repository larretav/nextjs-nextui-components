import { BottomNavigationBar } from "./_components/bottom-nav-bar/BottomNavigationBar";

export default function NavigationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div>
        <BottomNavigationBar />
      </div>
    </div>
  );
}