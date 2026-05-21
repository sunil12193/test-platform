import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="absolute inset-0 flex flex-col mt-5 items-left justify-left z-10">

    {/* LOGO */}
    <Image
      src="/gleefix_logo.svg"
      alt="Gleefix Logo"
      width={250}
      height={250}
      className="object-contain mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
    />

  </div>
    </Link>
  );
}