"use client"

import React from "react";
import { NavbarMenuToggle } from "@heroui/navbar";

interface NavbarToggleProps {
  isMenuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
}

export const NavbarToggle = ({
  isMenuOpen,
  onMenuOpenChange,
}: NavbarToggleProps) => {
  return (
    <NavbarMenuToggle
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      onClick={() => onMenuOpenChange(!isMenuOpen)}
    />
  );
};

