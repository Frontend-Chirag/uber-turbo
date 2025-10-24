
import Map from "@/components/map/map";
import { Navbar } from "@/components/nav-bar";
import { NuqsAdapter } from "nuqs/adapters/next";

interface HomeLayoutProps {
  sidebar: React.ReactNode;
}

export default function HomeLayout({ sidebar }: HomeLayoutProps) {
  return (
    <NuqsAdapter>
      <div className="flex flex-col min-h-screen">
        {/* Navbar stays fixed height */}
        <Navbar />

        {/* This section scrolls - key changes here */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1782px] mx-auto px-6 lg:px-16 pt-[60px] min-h-full">
            <div className="flex flex-col-reverse xl:flex-row gap-8 py-6 min-h-[calc(100vh-120px)]">
              <section className='flex-1 h-full flex p-4 border-2 border-neutral-200 rounded-lg box-border'>
                {sidebar}
              </section>
              <div className="w-full xl:flex-3 h-[500px] xl:h-[calc(100vh-120px)]">
                <Map />
              </div>
            </div>
          </div>
        </main>
      </div>
    </NuqsAdapter>
  );
}
