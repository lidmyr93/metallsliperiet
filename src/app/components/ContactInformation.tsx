import StyledLink from "./StyledLink";
import Image from "next/image";

export default function ContactInformation() {
  return (
    <section id="kontakt" className="mt-48 mb-8 px-5">
      <h2 className="text-5xl mb-4">Kontakt</h2>

      <div className="flex flex-col text-2xl">
        <StyledLink href="tel:08-6415611">08-641 56 11</StyledLink>
        <StyledLink href="mailto:info@metallsliperiet.se">
          info@metallsliperiet.se
        </StyledLink>
        <StyledLink href="https://maps.app.goo.gl/rXeGrcJx19Cpr88JA">
          Förrådsgränd 5b, 162 50 Vällingby
        </StyledLink>
      </div>
    </section>
  );
}
/*  <p className="text-2xl max-w-[320px]">
        Text om något, vet inte vad. Kanske om..... eh jag vet inte, vi hittar
        på något kul
      </p>

      <span className="flex mt-9">
        <a
          href="mailto:info@metallsliperiet.se"
          className="mr-2 font-semibold border-b-2"
        >
          Hör av dig
        </a>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width={18}
          height={10}
          className="md:hidden"
        />
      </span>

      <div className="flex text-xs justify-center items-center mt-12 flex-wrap">
        <StyledLink className="mr-2" href="tel:08-6415611">
          08-641 56 11
        </StyledLink>

        <StyledLink className="mr-2" href="mailto:info@metallsliperiet.se">
          info@metallsliperiet.se
        </StyledLink>

        <StyledLink
          className="mr-2"
          href="https://maps.app.goo.gl/rXeGrcJx19Cpr88JA"
        >
          Förrådsgränd 5b, 162 50 Vällingby
        </StyledLink>
      </div> */
