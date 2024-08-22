
export default function AlertsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 ">

      <div className="flex flex-col px-3 py-2 rounded-2xl gap-1 bg-blue-500 text-white col-span-4 shadow-lg">
        <h6 className=" font-bold">This is the Alert Title</h6>
        <p>This is the description</p>
      </div>
      <div className="flex flex-col px-3 py-2 rounded-2xl gap-1 bg-amber-500 text-white col-span-4 shadow-lg">
        <h6 className=" font-bold">This is the Alert Title</h6>
        <p>This is the description</p>
      </div>
      <div className="flex flex-col px-3 py-2 rounded-2xl gap-1 bg-red-500 text-white col-span-4 shadow-lg">
        <h6 className=" font-bold">This is the Alert Title</h6>
        <p>This is the description</p>
      </div>
      <div className="flex flex-col px-3 py-2 rounded-2xl gap-1 bg-green-500 text-black col-span-4 shadow-lg">
        <h6 className=" font-bold">This is the Alert Title</h6>
        <p>This is the description</p>
      </div>

    </div>
  );
}