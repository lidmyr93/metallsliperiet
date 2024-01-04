import Menu from "./components/Menu";
import Hero from "./components/Hero";

import ContactInformation from "./components/ContactInformation";
import ImageGallery from "./components/image-display";

export default function Home() {
  return (
    <main className="h-full min-h-screen pb-1 overflow-hidden max-w-[1440px] mx-auto">
      <Menu />
      <Hero />
      <ImageGallery />
      <ContactInformation />
    </main>
  );
}
