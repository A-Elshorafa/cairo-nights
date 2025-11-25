import type { Locale } from "@/i18n-config";
import { serviceRepo } from "@/repositories/service";
import { ServiceCollapsedCard } from "@/components/service-collapsed-card";

export default function ServicesPage({
  params,
}: {
  params: { lang: Locale };
}) {

  return (
    <div className="w-full grid xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 justify-center items-stretch gap-8">
      {
        serviceRepo.map((item, index) => (
          <ServiceCollapsedCard
            key={index}
            lang={params.lang}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            btnTextAr={item.btnTextAr}
            btnTextEn={item.btnTextEn}
          />
        ))
      }
    </div>
  );
}
