"use client"

import { getDictionary } from "@/diconaries";
import { IOfferData } from "@/repositories/offer";
import {Card, CardHeader, CardBody, Divider, Button, Image} from "@heroui/react";

export function OfferCollapsedCard({
  dictionary,
  title,
  description,
  imgSrc,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
} & IOfferData) {
  return (
    <Card className="h-full min-h-94">
      <CardHeader className="p-0 flex-col items-start">
        <img
          alt="Card background"
          className="w-full object-cover rounded-b-none"
          src={imgSrc}
        />
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col items-center gap-4 justify-between py-4 bg-white bg-secondary">
        <div className="flex flex-col gap-4 items-center justify-center max-h-4/5">
          <h1 className="font-semibold text-large text-content1 text-center line-clamp-2 flex-1">{title}</h1>
          <p className="text-content1 text-medium line-clamp-8 text-center">
            {description}
          </p>
        </div>
        <Button
          variant="solid"
          className="bg-button text-background w-3/4 max-w-64 min-w-24"
          onClick={(event) => event.stopPropagation()}
          onKeyDown={(event) => event.stopPropagation()}
        >
          {dictionary.requestNow}
        </Button>
      </CardBody>
    </Card>
  );
}
