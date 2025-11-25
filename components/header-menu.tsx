"use client"

import React from "react";
import { getDictionary } from '@/diconaries';
import { DownArrow, Logo, UpArrow } from "./icons";
import { useRouter,  usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export function HeaderMenu({
  lang,
  dictionary,
}: {
  lang: String,
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const router = useRouter();
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(dictionary.menu.about);

  const isMenuSelected = (menuHref: string) => {
    const pathName = usePathname();
    const segments = pathName.split("/");
    return segments.some(s=> `/${s}` === menuHref);
  } 

  const topNavLinks = [
    { label: dictionary.menu.about, href: "/about" },
    { label: dictionary.menu.services, href: "/services" },
    { label: dictionary.menu.companyDrivers, href: "/drivers" },
    { label: dictionary.menu.travelsAndFeatures, href: "/offers" },
  ];

  const handleSelect = (label: string, href: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <Navbar
      height={32}
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        wrapper: ["p-0 gap-0"],
        base: ["bg-primary", "h-8 ", "w-full", "p-0", "hidden lg:flex"],
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "border border-background w-1 gap-0",
          "p-0",
          "data-[active=true]:bg-background",
        ],
        content: "d-none gap-0",
      }}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          className="text-foreground"
        />
        <NavbarBrand>
          <Logo />
          <p className="ml-2 font-semibold text-foreground">{dictionary.appName}</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:flex w-full justify-between ">
        {topNavLinks.map(({ label, href }) => (
          <NavbarItem className="w-full flex items-center justify-center overflow-hidden hover:bg-button/80 cursor-pointer" key={label} isActive={activeLink === label} onClick={() => handleSelect(label, `/${lang}/${href}`)}>
            {activeLink === label? <UpArrow/> : <DownArrow color="black"/>}
            <div className="w-4"></div>
            <Link
              color="foreground"
              className={`${activeLink === label? "" :"text-background"} font-bold text-center`}
              aria-current={activeLink === label ? "page" : undefined}
              onClick={() => handleSelect(label, `/${lang}/${href}`)}
            >
              {label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {topNavLinks.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full"
              color={
                isMenuSelected(item.href) ? "primary" : "foreground"
              }
              size="lg"
              onPress={() => handleSelect(item.label, `/${lang}/${item.href}`)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

