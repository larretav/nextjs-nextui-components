
import { Badge, BadgeProps } from "@heroui/badge";
import { extendVariants } from "@heroui/system";

export const CBadge = (props: Omit<BadgeProps, 'children'>) => {
  return (
    <Badge {...props} variant="solid" color="primary" showOutline={false} classNames={{
    }} >
      <span className="hidden" />
    </Badge>
  )
}
