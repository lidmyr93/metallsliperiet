import Link from "next/link";

export default function Menu() {
  return (
    <nav className="flex justify-between mx-5 py-14 md:mx-8">
      <h1>STOCKHOLM METALLSLIPERI</h1>
      <Link href="#kontakt">KONTAKT</Link>
    </nav>
  );
}
