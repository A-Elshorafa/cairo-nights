"use client"

import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { LocaleSwitcher } from '@/components/locale-switcher';
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  Logo,
  WhatsAppIcon,
  DownArrow,
} from "@/components/icons";
import { getDictionary } from '@/diconaries';
import { usePathname } from "next/navigation";

interface NavbarClientProps {
  lang: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}

export const NavbarClient = ({
  lang,
  dictionary,
}: NavbarClientProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isMenuSelected = (menuHref: string) => {
    const pathName = usePathname();
    const segments = pathName.split("/");
    return segments.some(s=> `/${s}` === menuHref);
  } 

  return (
    <HeroUINavbar 
      maxWidth="full" 
      position="static" 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 lg:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Logo />
            <p className="font-bold text-inherit text-xl">{dictionary.appName}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 md:basis-full gap-1"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="text-inherit flex items-center">
          <DownArrow className="text-black dark:text-white"/>
          <span>USD</span>
        </NavbarItem>
        <NavbarItem>
          <LocaleSwitcher lang={lang}/>
        </NavbarItem>
        <NavbarItem className="text-inherit">
          {dictionary.login}
        </NavbarItem>
        <NavbarItem className="text-inherit">
          <Button color="default" variant="light">
            {dictionary.followMyRegistration}
          </Button>
        </NavbarItem>
        <NavbarItem className="text-inherit flex items-center gap-2">
          <WhatsAppIcon />
          <label>+201116010003</label>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  isMenuSelected(item.href)
                    ? "primary"
                    : "foreground"
                }
                href={`/${lang}/${item.href}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {lang === 'ar' ? item.labelAr : item.labelEn}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

