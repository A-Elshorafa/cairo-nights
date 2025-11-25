export interface IOfferData {
  title: string
  imgSrc: string
  description: string
}

export const offerRepo : Array<IOfferData> = [
  {
    title: "عروض الفنادق والعقارات",
    imgSrc:  new URL("../public/data/offer/room.png", import.meta.url).href,
    description: "اكتشف اجدد عروض الفنادق والعقارات الفندقية",
  },
  {
    title: "رحلات و اكتشافات",
    imgSrc:  new URL("../public/data/offer/temple.png", import.meta.url).href,
    description: "اكتشف مصر بعروض تشمل التنقل والإقامة والأنشطة.",
  },
  {
    title: "عرض الليموزين الفاخر",
    imgSrc:  new URL("../public/data/offer/car.png", import.meta.url).href,
    description: "باقات ليموزين VIP للمناسبات والرحلات اليومية.",
  },
];