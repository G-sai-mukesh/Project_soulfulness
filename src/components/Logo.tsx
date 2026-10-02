import Image from "next/image";
import logo from "../../public/images/logo.png";

export default function Logo({ size = "md", preload = false, className }: { size?: "md" | "lg"; preload?: boolean; className?: string }) {
  return (
    <Image
      src={logo}
      alt="Project Soulfulness"
      preload={preload}
      sizes={size === "lg" ? "160px" : "100px"}
      className={`select-none w-auto ${className ?? (size === "lg" ? "h-36 lg:h-40" : "h-14 lg:h-16")}`}
    />
  );
}
