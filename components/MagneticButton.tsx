"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function MagneticButton({
  href,
  children,
  className,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const isExternal = href.startsWith("http");

  const handleMove = (event: PointerEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) {
      return;
    }

    const bounds = button.getBoundingClientRect();
    const x = event.clientX - bounds.left - bounds.width / 2;
    const y = event.clientY - bounds.top - bounds.height / 2;
    const distance = Math.hypot(x, y);
    const radius = Math.max(bounds.width, bounds.height) * 0.85;

    if (distance < radius) {
      gsap.to(button, {
        x: x * 0.22,
        y: y * 0.22,
        duration: 0.35,
        ease: "power3.out",
      });
    }
  };

  const handleLeave = () => {
    const button = buttonRef.current;
    if (!button) {
      return;
    }

    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.65,
      ease: "elastic.out(1, 0.35)",
    });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        "inline-flex rounded-3xl border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-xl transition-colors hover:border-[#FF5F1F]/80 hover:text-[#FF5F1F]",
        className,
      )}
    >
      {children}
    </a>
  );
}
