import { Divider } from "@heroui/divider"

type Props = {
  text: string;
  className?: string;

}

export const SidebarFilterDivider = ({ text, className }: Props) => {
  return (
    <div className="w-full box-border">
      <Divider />
      <div className="px-4 py-2 ">
        <span className={"text-sm font-semibold text-default-800 " + className}>{text}</span>
      </div>
      <Divider />
    </div>
  )
}
