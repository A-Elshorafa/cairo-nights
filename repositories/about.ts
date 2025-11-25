export interface IAboutData {
  title: string
  imgSrc: string
  description: string
}

export const aboutRepo : Array<IAboutData> = [
  {
    imgSrc: new URL("../public/data/about/strongest.png", import.meta.url).href,
    title: "اقوى وسيط للخدمات السياحية في مصر",
    description: "شركة ليالي القاهرة هي وجهتك المثالية لخدمات الرفاهية والراحة في مصر، حيث تدمج في خدماتها ليموزين VIP، وخدمة المسار السريع في المطارات، إلى جانب حجز الفنادق والشقق الفندقية لتلبية جميع احتياجات عملائها بكل أناقة واحتراف. نسعى لتقديم تجارب فريدة تمثل الذوق الرفيع والخدمة المتميزة، لتكون رحلتك معنا ليس مجرد تنقّل، بل لحظة تُخلد في الذاكرة."
  },
  {
    imgSrc: new URL("../public/data/about/gawdah.png", import.meta.url).href,
    title: "جودة الخدمة والتدريب",
    description: "نحن نعمل دائمًا على تجهيز فرق العمل وتطوير مراحل الخدمة وتوحيد معايير الجدوى."
  },
  {
    imgSrc: new URL("../public/data/about/latest.png", import.meta.url).href,
    title: "اخر الاخبار",
    description: "تعين السيد / احمد سمير نائب رئيس مجلس الإدارة ومشرفا تنفيذي."
  },
  {
    imgSrc: new URL("../public/data/about/most.png", import.meta.url).href,
    title: "ابرز اللحظات",
    description: "مشاركة السيد / أيمن عادل رئيس مجلس الإدراة في إعلام الخليج."
  },
];