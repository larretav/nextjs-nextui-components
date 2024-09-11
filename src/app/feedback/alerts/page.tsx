import { PageTitle } from "@/components";

export default function AlertsPage() {
  return (
    <div className="flex flex-col gap-3 px-2 md:px-6">
      <PageTitle text="Alerts" />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
        <div className="flex flex-col col-span-4 py-2 px-3 text-white bg-blue-500 rounded-2xl shadow-lg">
          <h6 className="font-bold">This is the Alert Title</h6>
          <p>This is the description</p>
        </div>
        <div className="flex flex-col col-span-4 py-2 px-3 text-white bg-amber-500 rounded-2xl shadow-lg">
          <h6 className="font-bold">This is the Alert Title</h6>
          <p>This is the description</p>
        </div>
        <div className="flex flex-col col-span-4 py-2 px-3 text-white bg-red-500 rounded-2xl shadow-lg">
          <h6 className="font-bold">This is the Alert Title</h6>
          <p>This is the description</p>
        </div>
        <div className="flex flex-col col-span-4 py-2 px-3 text-black bg-green-500 rounded-2xl shadow-lg">
          <h6 className="font-bold">This is the Alert Title</h6>
          <p>This is the description</p>
        </div>

      </div>
    </div>
  );
}