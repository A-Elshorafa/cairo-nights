import { getDictionary } from '@/diconaries';
import { NavbarClient } from '@/components/navbar-client';

export const Navbar = async ({
  lang,
  dictionary,
}: {
  lang: String,
  dictionary: Awaited<ReturnType<typeof getDictionary>>["counter"];
}) => {
  return <NavbarClient lang={lang as string} dictionary={dictionary} />;
};
