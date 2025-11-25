export interface IServiceData {
  title: string
  imgSrc: string
  description: string
  btnTextAr: string
  btnTextEn: string
}

export const serviceRepo : Array<IServiceData> = [
  {
    imgSrc: new URL("../public/data/services/hotel.png", import.meta.url).href,
    title: "إقامتك المريحة تبدأ هنا",
    description:
      "احجز أفضل الفنادق والشقق الفندقية في القاهرة بمعايير فخامة وراحة.",
    btnTextAr: "استعرض الإقامات",
    btnTextEn: "Browse Stays"
  },
  {
    imgSrc: new URL("../public/data/services/car.png", import.meta.url).href,
    title: "تنقّل بأناقة وراحة",
    description:
      "أسطول سيارات فاخرة وعائلية مع سائقين محترفين.",
    btnTextAr: "احجز سيارتك الآن",
    btnTextEn: "Book Your Car Now"
  },
  {
    imgSrc: new URL("../public/data/services/fast-track.png", import.meta.url).href,
    title: "ابدأ رحلتك فورًا",
    description:
      "استقبال وتوديع لكبار الزوار في مطارات القاهرة، شرم الشيخ، الغردقة.",
    btnTextAr: "استمتع بتجربتك الآن",
    btnTextEn: "Enjoy Your Experience Now"
  },
  {
    imgSrc: new URL("../public/data/services/building.png", import.meta.url).href,
    title: "رحلات واستكشافات",
      description:
      "استمتع بجولات سياحية وتنزّهات في أجمل معالم مصر.",
    btnTextAr: "اكتشف الرحلات",
    btnTextEn: "Explore Trips"
  }
];
