
import { Badge, BadgeProps } from '@nextui-org/badge';
import { extendVariants } from '@nextui-org/system';

export const CBadge = (props: Omit<BadgeProps, 'children'>) => {
  return (
    <Badge {...props} variant="solid" color="success" showOutline={false} classNames={{
    }} >
      <span className="hidden" />
    </Badge>
  )
}
