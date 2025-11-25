"use client";

import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import clsx from "clsx";
import { Button } from "@heroui/button";
import { usePathname, useRouter } from "next/navigation";

export interface LocaleSwitcherProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const LocaleSwitcher = ({
  lang,
  className,
  classNames,
}:  {lang: String} & LocaleSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const redirectedPathname = (locale: string) => {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const handleLocaleChange = () => {
    const newLocale = lang === "ar" ? "en" : "ar";
    const newPath = redirectedPathname(newLocale);
    router.push(newPath);
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    onChange: handleLocaleChange,
    isSelected: lang === "ar",
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        {!isSelected ? (
          <Button 
            variant="light" 
            color="default" 
            className="text-center"
            onPress={handleLocaleChange}
          >
            العربية
          </Button>
        ) : (
          <Button 
            variant="light" 
            color="default" 
            className="text-center"
            onPress={handleLocaleChange}
          >
            English
          </Button>
        )}
      </div>
    </Component>
  );
};
