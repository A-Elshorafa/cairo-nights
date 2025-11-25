import { Locale } from "@/i18n-config";
import { getDictionary } from "@/diconaries";
import { offerRepo } from "@/repositories/offer";
import { AboutDetailedCard } from "@/components/about-detailed-card";
import { OfferCollapsedCard } from "@/components/offer-collapsed-card";

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale };
}) {
  // This is a server component: awaiting params-dependent server fetch is fine.
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-8 w-full justify-start items-start">
      <AboutDetailedCard
        btnText={dictionary.discoverAllOffers}
        dictionary={dictionary}
        title="ليالي القاهرة تهديك لحظات لا تُنسى"
        imgSrc={new URL("../../../public/data/offer/sun.png", import.meta.url).href}
        description="عيش تجربة الرفاهية بأسعار خاصة! اكتشف أحدث عروضنا على خدمات الليموزين، الفنادق، الشقق الفندقية، والرحلات، واستمتع بخدمة خمس نجوم بأقل سعر. احجز الآن واستفد من عروضنا الموسمية على جميع خدماتنا — لأن كل رحلة مع ليالي القاهرة تستحق أن تكون مميزة."
      />

      {offerRepo.map((driver, index) => (
        <OfferCollapsedCard
          key={index}
          dictionary={dictionary}
          imgSrc={driver.imgSrc}
          title={driver.title}
          description={driver.description}
        />
      ))}
    </div>
  );
}
