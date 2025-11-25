"use client"

import { getDictionary } from "@/diconaries";
import { IDriverData } from "@/repositories/driver";
import {Card, Image, CardFooter, Button, CardBody} from "@heroui/react";

export function DriverDetailCard({
  rate,
  trips,
  imgSrc,
  nickName,
  fullName,
  cardNumber,
  dictionary
}: {
  cardNumber: number, 
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
} & IDriverData) {
  return (
    <Card radius="sm" className="min-h-94 rounded-tr-large">
      <Image
        removeWrapper
        className="z-0 w-full h-full object-cover rounded-sm min-h-94"
        src={imgSrc}
      />
        <span className="absolute right-0 top-0">
          <div className="relative">
            <Image src={new URL("../public/ribbon.png", import.meta.url).href} height={60} width={40} className="flex items-center justify-center"/>
            <span className="z-10 absolute text-white top-2 right-3 font-bold">{cardNumber}</span>
          </div>
        </span>
      <CardFooter className="absolute bg-transparent bottom-1 z-10 flex flex-col gap-3 justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <span className=" text-white dark:text-secondary/80 font-bold">{nickName}</span>
          <Image
            className="object-cover"
            height={24}
            src={new URL("../public/star.svg", import.meta.url).href}
            width={24}
          />
          <span className="text-white dark:text-secondary/80 font-bold">{`(${rate})`}</span>
        </div>
        <div className="flex justify-between items-center gap-2 w-full">
          <span className="text-white dark:text-secondary/80">{fullName}</span>
          <span className="text-white dark:text-secondary/80">{trips} {dictionary.trip}</span>
        </div>
        <Button
          className="bg-button w-full text-background"
          radius="sm"
          size="lg"
          variant="solid"
        >
          {dictionary.requestRide}
        </Button>
      </CardFooter>
    </Card>
  );
}
