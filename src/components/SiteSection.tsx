import { ReactNode } from "react";

const variants = {
  paper:
    "border-y border-[#0c1a5a]/10 bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
  sky: "border-y border-[#0c1a5a]/10 bg-gingham shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]",
  ink: "border-y border-white/10 bg-[#0c1a5a] text-white shadow-[0_18px_50px_rgba(12,26,90,0.25)]",
} as const;

export function SiteSection({
  id,
  kicker,
  title,
  description,
  variant = "paper",
  art,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  description?: string;
  variant?: keyof typeof variants;
  art?: ReactNode;
  children: ReactNode;
}) {
  const isInk = variant === "ink";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-12 sm:py-16 ${variants[variant]}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <header className="mb-8 flex flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              className={`text-xs font-semibold tracking-[0.22em] uppercase ${
                isInk ? "text-white/60" : "text-[#0c1a5a]/60"
              }`}
            >
              {kicker}
            </p>
            <h2
              className={`mt-2 font-[var(--font-hand)] text-[clamp(2rem,4vw,2.75rem)] leading-[1.05] tracking-tight ${
                isInk ? "text-white" : "text-[#0b1b3b]"
              }`}
            >
              {title}
            </h2>
            {description ? (
              <p
                className={`mt-3 text-[15px] leading-7 ${
                  isInk ? "text-white/80" : "text-[#0b1b3b]/75"
                }`}
              >
                {description}
              </p>
            ) : null}
          </div>

          {art ? (
            <div
              className={`flex shrink-0 items-center justify-start md:justify-end ${
                isInk ? "text-white" : "text-[#0c1a5a]"
              }`}
            >
              {art}
            </div>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  );
}
