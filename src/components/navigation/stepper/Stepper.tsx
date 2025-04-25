
type Props = {
  children: React.ReactNode
}

const Stepper = ({ children }: Props) => {
  return (
    <div className="w-full relative flex items-center justify-between">
      {children}
    </div>
  )
}

export default Stepper