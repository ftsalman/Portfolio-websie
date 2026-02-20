"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Footer } from "@/components/Footer";
import { MagneticButton } from "@/components/MagneticButton";
import { Pricing } from "@/components/Pricing";
import { ProjectCard } from "@/components/ProjectCard";
import type { ProjectIconName } from "@/components/ProjectCard";
import { cn } from "@/lib/cn";
import { Navbar } from "./Navbar";

type SocialIconName = "github" | "linkedin" | "instagram";

function SocialIcon({
  icon,
  className,
}: {
  icon: SocialIconName;
  className?: string;
}) {
  if (icon === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={cn("h-5 w-5", className)}
      >
        <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.17 1.17a11 11 0 0 1 5.77 0c2.2-1.48 3.16-1.17 3.16-1.17.63 1.58.24 2.74.12 3.03.73.8 1.17 1.83 1.17 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.05.78 2.13v3.15c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className={cn("h-5 w-5", className)}
      >
        <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5M3 9h4v12H3zm7 0h3.82v1.71h.05c.53-1 1.83-2.06 3.77-2.06C21.2 8.65 22 11 22 14.05V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.21V21h-4z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zm9.65 1.5a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
    </svg>
  );
}

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  projectIcon: ProjectIconName;
  className: string;
};

const PROJECTS: ProjectItem[] = [
  {
    title: "MERN Commerce Platform",
    category: "Full Stack",
    description:
      "Scalable e-commerce platform with JWT authentication, admin dashboard, and secure checkout flow.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    imageSrc: "/projects/mern-commerce.jpg",
    imageAlt: "Dashboard preview for MERN Commerce Platform",
    projectIcon: "commerce",
    className: "xl:col-span-2 xl:row-span-2",
  },
  {
    title: "Realtime Team Chat",
    category: "Socket App",
    description:
      "Real-time messaging workspace with channels, typing indicators, and user presence powered by Node.js.",
    tags: ["React", "Node.js", "Socket.io"],
    imageSrc: "/projects/realtime-chat.jpg",
    imageAlt: "Realtime Team Chat app interface preview",
    projectIcon: "chat",
    className: "xl:col-span-2",
  },
  {
    title: "TaskFlow API",
    category: "Backend Engineering",
    description:
      "RESTful API for task lifecycle management with role permissions and robust validation architecture.",
    tags: ["Express", "MongoDB", "JWT"],
    imageSrc: "/projects/taskflow-api.jpg",
    imageAlt: "TaskFlow API architecture preview",
    projectIcon: "api",
    className: "xl:col-span-1",
  },
  {
    title: "Portfolio CMS",
    category: "Content Platform",
    description:
      "Content-managed portfolio system with media uploads, markdown support, and reusable UI modules.",
    tags: ["MERN", "Cloudinary", "Redux"],
    imageSrc: "/projects/portfolio-cms.jpg",
    imageAlt: "Portfolio CMS management interface preview",
    projectIcon: "cms",
    className: "xl:col-span-1",
  },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/ftsalman",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/salmaan-faris-16381a33a",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/1tinx_s",
    icon: "instagram",
  },
] as const;

const SKILLS = [
  "Node.js",
  "React",
  "Tailwind CSS",
  "GSAP",
  "Next.js",
  "MongoDB",
];

gsap.registerPlugin(ScrollTrigger);

export function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.08,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".js-reveal-line",
        {
          yPercent: 120,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power4.out",
          stagger: 0.12,
        },
      );

      gsap.utils.toArray<HTMLElement>(".js-section").forEach((section) => {
        gsap.fromTo(
          section,
          {
            autoAlpha: 0,
            y: 70,
            scale: 0.965,
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              end: "top 32%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, pageRef);

    const refreshTimeout = window.setTimeout(
      () => ScrollTrigger.refresh(),
      250,
    );

    return () => {
      window.clearTimeout(refreshTimeout);
      cancelAnimationFrame(rafId);
      context.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={pageRef} className="noise-overlay relative min-h-screen pb-20">
      {/* Navbar placed outside hero, aligned with container */}
      <div className="fixed left-0 top-0 z-50 w-full bg-black/20 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-4 md:px-8 p-4">
          <Navbar />
        </div>
      </div>

      <main className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-4 pb-20 pt-24 md:px-8 md:pt-28">
        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="js-section relative isolate min-h-[720px] overflow-hidden rounded-[2rem] border border-white/10"
        >
          <Image
            src="/projects/me.jpg"
            alt="Hero portrait"
            fill
            priority
            className="object-cover"
          />

          {/* Orange Cinematic Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff4d00]/90 via-[#ff5f1f]/70 to-[#1a1a1a]/40" />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,120,40,0.5),transparent_50%)]" />

          {/* Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/90 to-transparent" />

          <div className="relative z-10 flex h-full flex-col p-6 space-y-2 md:p-12">
            {/* Text */}
            <div className="mt-24 max-w-xl space-y-2">
              <p className="js-reveal-line text-sm tracking-[0.2em] text-white/80">
                Hey, I’m a
              </p>

              <div className="overflow-hidden">
                <h1 className="js-reveal-line text-6xl font-bold leading-[0.9] tracking-[-0.05em] text-white md:text-8xl xl:text-9xl">
                  MERN Stack
                </h1>
              </div>

              <div className="overflow-hidden">
                <h1 className="js-reveal-line text-6xl font-bold leading-[0.9] tracking-[-0.05em] text-white md:text-8xl xl:text-9xl">
                  Developer
                </h1>
              </div>

              <p className="mt-6 max-w-md text-white/80">
                I build scalable full-stack applications with clean
                architecture, performance focus, and modern UI experiences.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-auto flex gap-4 md:mt-3">
              <MagneticButton href="#projects">View Projects</MagneticButton>

              <MagneticButton
                href="#contact"
                className="border-[#FF5F1F]/70 bg-[#FF5F1F]/15 text-[#FF5F1F]"
              >
                Get in Touch
              </MagneticButton>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://github.com/ftsalman"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white transition-all hover:border-[#FF5F1F] hover:text-[#FF5F1F]"
              >
                <SocialIcon icon="github" />
              </a>

              <a
                href="https://www.linkedin.com/in/salmaan-faris-16381a33a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white transition-all hover:border-[#FF5F1F] hover:text-[#FF5F1F]"
              >
                <SocialIcon icon="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/1tinx_s"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-white transition-all hover:border-[#FF5F1F] hover:text-[#FF5F1F]"
              >
                <SocialIcon icon="instagram" />
              </a>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain unchanged */}
        <section
          id="about"
          className="js-section grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl md:grid-cols-2 md:p-6"
        >
          <div className="relative min-h-[430px] overflow-hidden rounded-3xl border border-white/15">
            <Image
              src="/me.png"
              alt="Salman Faris portrait"
              fill
              priority
              className="rounded-3xl object-cover"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#FF5F1F]/45 via-transparent to-[#FF5F1F]/10 mix-blend-screen" />
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-white/15 bg-black/35 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8A2BE2]">
              About Me
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
              Full-stack engineering from Palakkad.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75">
              I am Salman Faris, a MERN stack developer based in Palakkad. I
              focus on building fast, secure, and maintainable web applications
              with clear architecture, reusable components, and clean code.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              {[
                "MongoDB + Mongoose",
                "Express REST APIs",
                "React Frontend",
                "Node.js Backend",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/12 bg-white/[0.03] px-4 py-3"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="js-section">
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
              <h2 className="js-reveal-line text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                Skills
              </h2>
            </div>
            <p className="max-w-2xl text-white/70">
              Core technologies I use to build modern, scalable applications.
            </p>
          </div>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill) => (
              <article
                key={skill}
                className="rounded-3xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <p className="text-lg font-semibold tracking-tight text-white">
                  {skill}
                </p>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-[#FF5F1F] to-[#8A2BE2]" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="js-section">
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
              <h2 className="js-reveal-line text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                MERN Projects
              </h2>
            </div>
            <p className="max-w-2xl text-white/70">
              Selected full-stack builds focused on practical architecture,
              performance, and real business workflows.
            </p>
          </div>
          <div className="mt-7 grid auto-rows-[220px] grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                description={project.description}
                tags={project.tags}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                projectIcon={project.projectIcon}
                className={cn(project.className)}
              />
            ))}
          </div>
        </section>

        <Pricing />

        <section
          id="contact"
          className="js-section rounded-3xl border border-white/10 bg-gradient-to-r from-[#8A2BE2]/20 via-black/55 to-[#FF5F1F]/20 p-8 text-center md:p-12"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            Let&apos;s Connect
          </p>
          <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
            Need a MERN developer for your next product?
          </h3>
          <div className="mt-8 flex justify-center">
            <MagneticButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ftsalmanfarisotp@gmail.com&su=Project%20Inquiry&body=Hi%20Salman%2C%20I%20want%20to%20discuss%20a%20project."
              className="border-[#FF5F1F]/80 bg-[#FF5F1F]/14 text-[#FF5F1F]"
            >
              ftsalmanfarisotp@gmail.com
            </MagneticButton>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
