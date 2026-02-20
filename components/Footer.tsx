import { MagneticButton } from "@/components/MagneticButton";

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#pricing" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rounded-3xl border border-white/10 bg-black/45 p-6 backdrop-blur-2xl md:p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#FF5F1F]">
            Salman Faris
          </p>
          <h4 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            MERN Stack Developer
          </h4>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Building full-stack applications with React, Node.js, Express, and
            MongoDB from Palakkad.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition-colors hover:text-[#FF5F1F]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">
            Contact
          </p>
          <p className="mt-4 text-sm text-white/75">
           Mythri Nagar Kalapaka, Pattambi, Kerala 679306
          </p>
          <div className="mt-5">
            <MagneticButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ftsalmanfarisotp@gmail.com&su=Project%20Inquiry&body=Hi%20Salman%2C%20I%20want%20to%20discuss%20a%20project."
              className="border-[#FF5F1F]/80 bg-[#FF5F1F]/14 text-[#FF5F1F]"
            >
              ftsalmanfarisotp@gmail.com
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/55">
        Copyright {year} Salman Faris
      </div>
    </footer>
  );
}
