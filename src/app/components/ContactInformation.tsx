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

      <div className="text-2xl mt-4">
        <h3>Öppettider</h3>
        <p>mån-tor: 06.30 - 16.00</p>
        <p>fre-sön: stängt</p>
      </div>
    </section>
  );
}
