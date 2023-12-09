import Image from "next/image";
import Animation from "./components/Animation";

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
          <p className="text-sm mb-2">Förrådsgränd 5b, 162 50 Vällingby</p>
          <p className="text-sm mb-2">08-641 56 11</p>
          <p className="text-sm mb-2">info@metallsliperiet.se</p>
        </div>
      </section>
    </main>
  );
}
