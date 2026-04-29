import Image from "next/image";
import { ReactNode } from "react";

export function PaperCard({
  title,
  eyebrow,
  children,
  right,
  id,
  image,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  right?: ReactNode;
  /** Optional cover photo across the top of the card */
  image?: { src: string; alt: string };
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden rounded-[26px] border border-[#0c1a5a]/10 bg-white/85 shadow-[0_22px_60px_rgba(12,26,90,0.16)] backdrop-blur-sm"
    >
      {image ? (
        <div className="relative z-[1] aspect-[21/9] min-h-[140px] w-full sm:aspect-[2.4/1] sm:min-h-[168px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1a5a]/25 to-transparent" />
        </div>
      ) : null}

      <div className="pointer-events-none absolute -top-5 left-10 z-[2] h-12 w-16 rotate-[-2deg]">
        <svg viewBox="0 0 120 90" className="h-full w-full">
          <path
            d="M18 30c0-10 8-18 18-18h48c10 0 18 8 18 18v42c0 10-8 18-18 18H36c-10 0-18-8-18-18V30z"
            fill="#0c1a5a"
            opacity="0.96"
          />
          <path
            d="M45 18c1-7 7-12 15-12s14 5 15 12"
            fill="none"
            stroke="#f5f7ff"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-[1] px-6 pb-7 pt-10 sm:px-9">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0 flex-1">
            {eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0c1a5a]/60">
                {eyebrow}
              </p>
            ) : null}

            {title ? (
              <h2 className="mt-2 font-[var(--font-hand)] text-[clamp(1.65rem,4vw,2.1rem)] leading-[1.08] tracking-tight text-[#0b1b3b] sm:mt-1">
                {title}
              </h2>
            ) : null}
          </div>

          {right ? (
            <div className="hidden shrink-0 sm:block [&>svg]:shrink-0">{right}</div>
          ) : null}
        </div>

        <div className="mt-6 text-[15px] leading-7 text-[#0b1b3b]/80">
          {children}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-paper-texture opacity-[0.22]" />
      <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-[#0c1a5a]/10" />
    </section>
  );
}

