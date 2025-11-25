import { aboutRepo } from "@/repositories/about";
import { getDictionary } from "@/diconaries";
import type { Locale } from "@/i18n-config";
import { AboutDetailedCard } from "@/components/about-detailed-card";
import { AboutCollapsedCard } from "@/components/about-collapsed-card";

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return  (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 lg:px-0 xs:px-2 gap-4 w-full justify-start items-start">
      <AboutDetailedCard
        className="xs:hidden xl:grid"
        btnText={dictionary.learnMore}
        dictionary={dictionary}
        title={aboutRepo[0].title}
        imgSrc={aboutRepo[0].imgSrc}
        description={aboutRepo[0].description}
      />

      {aboutRepo.slice(1).map((item, index) => (
        <AboutCollapsedCard
          key={index}
          title={item.title}
          imgSrc={item.imgSrc}
          description={item.description}
        />
      ))}
    </div>
  );
}
