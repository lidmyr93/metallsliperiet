import Image from "next/image";

export default function Hero() {
  return (
    <section className="mb-24 flex flex-col md:mx-10">
      <div className="relative w-full lg:grid lg:grid-cols-2">
        <h2 className="text-5xl text-center mb-24 px-5 flex flex-col lg:text-8xl lg:z-10 lg:text-left lg:mt-10 xl:ml-24">
          <span className="">STOCKHOLMS</span>
          <span className="lg:ml-28 xl:ml-64">METALLSLIPERI</span>
        </h2>
        <Image
          alt="hej"
          src="/hero.png"
          width={500}
          height={500}
          className="mx-auto lg:justify-self-end lg:mx-0 xl:justify-self-start"
        />
      </div>

      <p className="text-3xl text-center mt-24 px-5 md:self-end">
        Kort text om vem jocke är, vad han gör och varför. Och så babblar vi på.
      </p>
    </section>
  );
}
