import Image from "next/image";
import Animation from "./components/Animation";
import StyledLink from "./components/StyledLink";

export default function Home() {
  return (
    <main className="h-screen">
      <section className="w-full h-full relative">
        <Image
          src="/display.jpeg"
          className="w-full h-full object-cover blur-sm"
          alt="Metall arbete"
          width={800}
          height={600}
          objectFit="cover"
          quality={50}
        />
      </section>
      <section className="absolute bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-6/12 rounded-md p-8 border-[#ffffff54] border">
        <div className="flex justify-center">
          <Animation />
        </div>

        <div className="h-0 border-t border-white w-full my-8" />
        <div className="text-center">
          <h1 className="text-2xl mb-16">Hemsida under konstruktion</h1>
          <p className="text-base mb-2">Kontakt</p>

          <StyledLink href="https://maps.app.goo.gl/rXeGrcJx19Cpr88JA">
            Förrådsgränd 5b, 162 50 Vällingby
          </StyledLink>

          <StyledLink href="tel:08-6415611">08-641 56 11</StyledLink>
          <StyledLink href="mailto:info@metallsliperiet.se">
            info@metallsliperiet.se
          </StyledLink>
        </div>
      </section>
    </main>
  );
}
