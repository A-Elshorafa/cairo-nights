"use client";

import { getDictionary } from "@/diconaries";
import { Card, CardBody, Button } from "@heroui/react";

export function AboutDetailedCard({
  title,
  imgSrc,
  btnText,
  className,
  dictionary,
  description,
}: {
  className?: string;
  title: string;
  imgSrc: string;
  btnText?: string;
  description: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  return (
    <Card className={"p-0 xl:col-span-3 sm:col-span-2 xs:col-span-1 h-full min-h-94 min-w-82 rounded-lg " + className}>
      <CardBody className="p-0 bg-white h-full w-full bg-secondary">
        <div className="flex items-center h-full min-w-1/2">
          <img
            alt="Card background"
            className="w-2/5 h-full object-cover rounded-b-none"
            src={imgSrc}
          />
          <div className="flex flex-col items-center gap-4 justify-between h-full py-4 text-start px-4 w-3/5">
            <div className="flex flex-col gap-4 items-start justify-start max-h-4/5">
              <h1 className="font-bold text-2xl text-content1 line-clamp-2 flex-1">{title}</h1>
              <p className="text-content1 text-medium line-clamp-8">
                {description}
              </p>
            </div>
              <Button
                variant="solid"
                radius="sm"
                size="lg"
                className="bg-button text-background w-full"
                onClick={(event) => event.stopPropagation()}
                onKeyDown={(event) => event.stopPropagation()}
              >
                {btnText || dictionary.learnMore}
              </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
