"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";

export type ProjectIconName = "commerce" | "chat" | "api" | "cms";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  imageSrc: string;
  projectIcon: ProjectIconName;
  imageAlt?: string;
  className?: string;
};

function ProjectIcon({ icon }: { icon: ProjectIconName }) {
  const baseClass = "h-5 w-5";

  if (icon === "commerce") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={baseClass}
      >
        <path
          d="M3 4h2l2.2 10.2A2 2 0 0 0 9.16 16H18a2 2 0 0 0 1.95-1.56L21 9H7.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="20" r="1.5" fill="currentColor" />
        <circle cx="18" cy="20" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "chat") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={baseClass}
      >
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7A2.5 2.5 0 0 1 17.5 15H10l-4.5 4V15H6.5A2.5 2.5 0 0 1 4 12.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "api") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={baseClass}
      >
        <path
          d="M8 4 3 12l5 8M16 4l5 8-5 8M10.5 19l3-14"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={baseClass}>
      <path
        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14l-4-3-4 3-4-3-4 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProjectCard({
  title,
  category,
  description,
  tags,
  imageSrc,
  projectIcon,
  imageAlt,
  className,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) {
      return;
    }

    gsap.set(overlayRef.current, {
      autoAlpha: 0,
      y: 20,
    });
  }, []);

  const onEnter = () => {
    if (!cardRef.current || !overlayRef.current) {
      return;
    }

    gsap.to(cardRef.current, {
      scale: 1.03,
      duration: 0.45,
      ease: "power3.out",
    });
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.65,
        ease: "power3.out",
      });
    }

    gsap.to(overlayRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (!cardRef.current || !overlayRef.current) {
      return;
    }

    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.45,
      ease: "power3.out",
    });
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.02,
        duration: 0.55,
        ease: "power3.out",
      });
    }

    gsap.to(overlayRef.current, {
      autoAlpha: 0,
      y: 20,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <article
      ref={cardRef}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl",
        className,
      )}
    >
      <div ref={imageRef} className="absolute inset-0 scale-[1.02]">
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 24vw, (min-width: 768px) 48vw, 100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(255,95,31,0.22),transparent_52%)] opacity-80" />
      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#FF5F1F]">
              {category}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>
          </div>
          <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-black/45 text-white/90">
            <ProjectIcon icon={projectIcon} />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-3xl border border-white/20 px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-20 flex items-end rounded-3xl bg-gradient-to-t from-[#8A2BE2]/80 via-[#8A2BE2]/30 to-[#FF5F1F]/60 p-6"
      >
        <p className="max-w-[24ch] text-sm leading-relaxed text-white/95">
          {description}
        </p>
      </div>
    </article>
  );
}
