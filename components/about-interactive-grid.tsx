"use client";

import React from "react";
import { getDictionary } from "@/diconaries";
import type { IAboutData } from "@/repositories/about";
import { AboutCollapsedCard } from "./about-collapsed-card";
import { AboutDetailedCard } from "./about-detailed-card";

export function AboutInteractiveGrid({
  items,
  dictionary,
}: {
  items: IAboutData[];
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const isExpanded = (index: number) => expandedIndex === index;

  const handleKeyToggle = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <div className={`grid sm:grid-cols-2 xs:grid-cols-1 justify-center items-stretch gap-8 w-full ${expandedIndex !== null ? "xl:grid-cols-6" : "xl:grid-cols-4"}`}>
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          role="button"
          tabIndex={0}
          aria-pressed={isExpanded(index)}
          className={`"cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isExpanded(index)? 'col-span-3': ''}`}
          onClick={() => toggleCard(index)}
          onKeyDown={(event) => handleKeyToggle(event, index)}
        >
          {isExpanded(index) ? (
            <AboutDetailedCard
              key={index}
              dictionary={dictionary}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          ) : (
            <AboutCollapsedCard
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          )}
        </div>
      ))}
    </div>
  );
}

