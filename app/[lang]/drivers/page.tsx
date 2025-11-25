import { Locale } from "@/i18n-config";
import { getDictionary } from "@/diconaries";
import { driverRepo } from "@/repositories/driver";
import { DriverDetailCard } from "@/components/driver-detail-card";
import { AboutDetailedCard } from "@/components/about-detailed-card";

export default async function DriverPage({
  params,
}: {
  params: { lang: Locale };
}) {
  // This is a server component: awaiting params-dependent server fetch is fine.
  const dictionary = await getDictionary(params.lang);

  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-4 w-full justify-start items-start">
      <AboutDetailedCard
        btnText={dictionary.ourDrivers}
        dictionary={dictionary}
        title="كباتن شركة ليال القاهرة المميزين"
        imgSrc={new URL("../../../public/data/driver/office.png", import.meta.url).href}
        description="نعرف تمامًا إن جزء كبير من ثقة عملائنا وتجربتهم المميزة يبدأ من كباتن ليالي القاهرة — نجوم الخدمة الحقيقيين. وعشان نخلّي تجربتك أسهل وأفخم، قدّمنا لك الآن خدمة الحجز المباشر مع الكابتن"
      />

      {driverRepo.map((driver, index) => (
        <DriverDetailCard
          key={driver.nickName ?? index}
          cardNumber={index + 1}
          dictionary={dictionary}
          fullName={driver.fullName}
          imgSrc={driver.imgSrc}
          nickName={driver.nickName}
          rate={driver.rate}
          trips={driver.trips}
        />
      ))}
    </div>
  );
}
