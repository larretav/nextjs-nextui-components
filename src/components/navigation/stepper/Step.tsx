
type Props = {
  children: React.ReactNode
}

export const Step = ({ children }: Props) => {
  return (
    <div className="relative z-10 grid place-items-center w-10 h-10 rounded-full font-bold transition-all duration-300 bg-gray-900 text-white">
      {children}
    </div>
  )
}
