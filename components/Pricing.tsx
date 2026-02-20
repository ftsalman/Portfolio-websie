import { MagneticButton } from "@/components/MagneticButton";
import { cn } from "@/lib/cn";

type ServiceItem = {
  name: string;
  label: string;
  description: string;
  deliverables: string[];
  highlighted?: boolean;
};

const SERVICES: ServiceItem[] = [
  {
    name: "Frontend Development",
    label: "UI Engineering",
    description:
      "Responsive and modern interfaces with clean architecture and premium motion.",
    deliverables: ["React components", "Next.js pages", "Tailwind CSS styling"],
  },
  {
    name: "Full-Stack MERN Apps",
    label: "End-to-End Build",
    description:
      "Production-ready MERN applications from database schema to deployment.",
    deliverables: [
      "Node + Express API",
      "MongoDB integration",
      "Authentication flow",
      "Admin dashboard",
    ],
    highlighted: true,
  },
  {
    name: "Maintenance & Scaling",
    label: "Long-Term Support",
    description:
      "Optimization, bug fixing, and feature scaling for growing products.",
    deliverables: ["Performance tuning", "Refactoring", "Deployment + support"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="js-section">
      <div className="overflow-hidden">
        <h2 className="js-reveal-line text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
          Services
        </h2>
      </div>
      <p className="mt-4 max-w-2xl text-white/70">
        Service-focused collaboration for startups, businesses, and product
        teams.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.name}
            className={cn(
              "rounded-3xl border border-white/15 bg-white/[0.06] p-7 backdrop-blur-2xl",
              service.highlighted &&
                "border-orange-500 shadow-[0_0_40px_rgba(255,95,31,0.25)]",
            )}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-white/65">
              {service.label}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {service.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {service.description}
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              {service.deliverables.map((item) => (
                <li key={item} className="rounded-3xl bg-black/25 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <MagneticButton
              href="#contact"
              className={cn(
                "mt-7 w-full justify-center border-white/35",
                service.highlighted &&
                  "border-[#FF5F1F]/80 bg-[#FF5F1F]/14 text-[#FF5F1F]",
              )}
            >
              Get Service
            </MagneticButton>
          </article>
        ))}
      </div>
    </section>
  );
}
