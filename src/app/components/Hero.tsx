import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-24 flex flex-col md:mx-10">
      <div className="relative w-full lg:grid lg:grid-cols-2">
        <h2 className="text-5xl text-center mb-24 px-5 flex flex-col lg:text-8xl lg:z-10 lg:text-left lg:mt-10 xl:ml-24 z-10">
          <span className="">STOCKHOLMS</span>
          <span className="lg:ml-28 xl:ml-64">METALLSLIPERI</span>
        </h2>

        <div className="relative justify-self-end z-0 w-max mx-auto">
          <div className="absolute z-10 top-0 bottom-0 right-0 left-0 bg-gradient-to-t md:bg-gradient-to-r from-mainBg to-transparent" />
          <Image
            alt="hej"
            src="/hero.jpeg"
            width={500}
            height={500}
            className="relative z-0 "
          />
        </div>
      </div>
      <p className="text-xl mt-24 px-5 lg:px-0 lg:text-end lg:text-3xl">
        Joakim Arnblom grundade Stockholms metallsliperi år <b>1987 </b>
        men har själv varit i branschen i 45 år. Sedan grundandet har företaget
        arbetat med en uppsjö av intressanta projekt, under senare år till
        exempel med företag som <b>J-craft </b>, <b>Dustcontrol </b> och{" "}
        <b>Svenskt Tenn </b>. Företaget erbjuder slipning, högglanspolering och
        mattborstning av alla metalltyper, även betning av rostfritt,
        glasblästring, riktarbeten och mindre reparationer.
        <br />
        Stockholms metallsliperi är byggt på resultat av <b>högsta kvalitet </b>
        och levererar alltid därefter.
      </p>
    </section>
  );
}
