import { getUserDetails } from "../_utils/get-user-details";

type Props = {
  params: {
    id: string
  }
}

export default async function DetailsPage({ params }: Props) {

  const user = await getUserDetails(+params.id)

  if(!user) return <span>Usuario no encontrado</span>

  return (
    <div className='w-full flex flex-col gap-2 bg-green-950 text-zinc-200 rounded-md'>
      <span>{user.address.street}</span>
      <span>{user.address.number}</span>
      <span>{user.address.suburb}</span>
      <span>{user.address.city}</span>
      <span>{user.address.state}</span>
      <span>{user.address.country}</span>
    </div>
  );
}