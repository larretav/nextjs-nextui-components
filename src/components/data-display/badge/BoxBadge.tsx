import { Badge } from "@nextui-org/badge"
import { BsFillBoxSeamFill } from "react-icons/bs"

type Props = {
    quantity: number
    className?: string
}
export default function BadgeIcon({ quantity, className = "" }: Props) {
    return <>
        <div className={className}>
            <Badge color="success" content={quantity} shape="circle">
                <div className="flex items-center gap-3 rounded-full bg-green-100 p-3 dark:bg-green-500/30">
                    <BsFillBoxSeamFill className="fill-current text-green-600 dark:text-green-200" size={30} />
                </div>
            </Badge>
        </div>
    </>
}