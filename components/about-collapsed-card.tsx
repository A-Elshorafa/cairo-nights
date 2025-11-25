"use client"

import {Card, CardHeader, CardBody, Image, Divider, CardFooter} from "@heroui/react";

export function AboutCollapsedCard({
  title="Daily Mix",
  description="Frontend Radio",
  imgSrc="https://heroui.com/images/hero-card-complete.jpeg",
}: {
  title: string,
  imgSrc: string,
  description: string
}) {
  return (
    <Card className="min-h-94 rounded-lg">
      <CardHeader className="p-0 flex-col items-start">
        <img
          alt="Card background"
          className="w-full h-52 object-cover rounded-b-none"
          src={imgSrc}
        />
      </CardHeader>
      <Divider />
      <CardBody className="py-2 bg-white bg-secondary">
        <div className="flex flex-col items-center justify-start gap-4 ">
          <h1 className="text-large font-semibold text-content1 flex-1 text-center">{title}</h1>
          <h3 className="text-small text-content1 text-center line-clamp-4">{description}</h3>
        </div>
      </CardBody>
    </Card>
  );
}
