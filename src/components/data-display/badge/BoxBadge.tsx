import { Badge } from "@heroui/badge"
import { BsFillBoxSeamFill } from "react-icons/bs"

type Props = {
    quantity: number
    className?: string
    boxSize?: number
    padding?: "sm"| "md"
    badgeSize?: "sm"|"md"|"lg"
    badgeVariant?:"solid" | "flat" | "faded" | "shadow" 
}
export default function BadgeIcon({ quantity, className = "", boxSize: size=30, padding="sm", badgeSize="md", badgeVariant="solid",  }: Props) {
    return <>
        <div className={className}>
            <Badge  content={quantity} shape="circle" size={badgeSize} variant={badgeVariant}  classNames={{badge: "font-semibold text-green-500 bg-green-200"}} >
                <div className={`flex items-center gap-3 rounded-full bg-green-100 dark:bg-green-500/30 ${padding=="sm" ? "p-3" : "p-5"}`}>
                    <BsFillBoxSeamFill className="text-green-600 fill-current dark:text-green-200" size={size} />
                </div>
            </Badge>
        </div>
    </>
}