import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-between mx-5 py-14 md:mx-8">
      <h1>STHML METALLSLIPERI</h1>
      <Link href="#kontakt">CONTACT</Link>
    </nav>
  );
}
