import { Button } from "@repo/design-system/components/ui/button";
import { DictonaryNames, getDictionary } from "@repo/internationalization";

type HomeProps = {
  params: Promise<{
    locale: string;
    country: string;
  }>
}

export default async function Home({ params }: HomeProps) {
  // const { locale, country } = await params;
  // const dictionary = await getDictionary(locale, DictonaryNames.uber);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     yo
    </div>
  );
}
