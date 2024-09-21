type Props = {
  text: string
}

export const SidebarFilterTitle = ({ text }: Props) => {
  return (
    <span className=" text-xl font-semibold text-default-800">{text}</span>
  )
}
