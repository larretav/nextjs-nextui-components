type Props = {
  text: string
}

export const PageTitle = ({ text }: Props) => {
  return (
    <span className="text-3xl font-semibold text-default-800">{text}</span>
  )
}
