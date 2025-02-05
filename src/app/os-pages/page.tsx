import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ButtonVariantProps } from "@heroui/theme";
import { ReactNode } from "react";
import { FaChevronLeft } from "react-icons/fa6";

type PagesType = {
  href: string
  color: ButtonVariantProps['color']
  children: ReactNode
}

export default function OsPagesPage() {
  const pages: PagesType[] = [
    {
      href: "/os-pages/landing",
      color: "warning",
      children: "Landing Page"
    },
    {
      href: "/os-pages/login",
      color: "secondary",
      children: "Login Page"
    },
    {
      href: "/os-pages/register",
      color: "secondary",
      children: "Register Page"
    },
  ]

  return (
    <div className="flex flex-col gap-3 p-2 mt-4">
      <div >
        <Button variant="light" as={Link} href="/" startContent={<FaChevronLeft />}>
          Menu principal
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 p-2 mt-3 sm:grid-cols-3">
        {
          pages.map(item => <Button
            key={item.href}
            href={item.href}
            as={Link}
            color={item.color}
            showAnchorIcon
            variant="solid"
            radius="sm"
            fullWidth
          >
            {item.children}
          </Button>)
        }

      </div>
    </div>
  );
}