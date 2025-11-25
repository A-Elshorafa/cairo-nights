"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { siteConfig } from "@/config/site";

interface NavbarMenuWrapperProps {
  lang: string;
  isMenuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
}

export const NavbarMenuWrapper = ({
  lang,
  isMenuOpen,
  onMenuOpenChange,
}: NavbarMenuWrapperProps) => {
  const router = useRouter();

  const handleSelect = (href: string) => {
    onMenuOpenChange(false);
    router.push(href);
  };

  return (
    <NavbarMenu>
      <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
              onPress={() => handleSelect(`/${lang}/${item.href}`)}
            >
              {lang === 'ar' ? item.labelAr : item.labelEn}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  );
};

