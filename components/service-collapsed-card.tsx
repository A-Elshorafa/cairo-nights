"use client"

import { IServiceData } from "@/repositories/service";
import {Card, CardHeader, CardBody, Divider, Button} from "@heroui/react";

export function ServiceCollapsedCard({
  lang,
  btnTextAr="Text",
  btnTextEn="Text",
  title="Daily Mix",
  description="Frontend Radio",
  imgSrc="https://heroui.com/images/hero-card-complete.jpeg",
}: {
  lang: string,
} & IServiceData) {
  return (
    <Card radius="sm">
      <CardHeader className="p-0 flex-col items-start">
        <img
          alt="Card background"
          className="w-full object-contain rounded-b-none"
          src={imgSrc}
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-center justify-between py-4 gap-2 bg-white bg-secondary">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-xl text-content1 flex-1 text-center">{title}</h1>
          <h3 className="text-small text-content1 text-center line-clamp-2">{description}</h3>
        </div>
        <Button
          variant="solid"
          className="bg-button text-background w-3/4"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {lang === "ar"? btnTextAr : btnTextEn}
        </Button>
      </CardBody>
    </Card>
  );
}
