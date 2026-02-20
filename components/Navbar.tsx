import { MagneticButton } from "@/components/MagneticButton";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#pricing" },
];

export function Navbar() {
  return (
    <header className="sticky top-5 z-50 px-4 md:px-8">
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between rounded-3xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-xl md:px-6">
        <a
          href="#home"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-white/90"
        >
          SALMAN FARIS
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-[#FF5F1F]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <MagneticButton
          href="#contact"
          className="border-[#FF5F1F]/60 bg-[#FF5F1F]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF5F1F]"
        >
          Hire Me
        </MagneticButton>
      </nav>
    </header>
  );
}
