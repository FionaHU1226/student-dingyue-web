import Image from "next/image";

import { BiasCard } from "@/components/BiasCard";
import { BlobCorners, DoodleCandy, DoodleStar } from "@/components/Doodle";
import { DecoStrip } from "@/components/DecoStrip";
import { MoodMeter } from "@/components/MoodMeter";
import { PaperCard } from "@/components/PaperCard";
import { ProfilePhoto } from "@/components/ProfilePhoto";
import {
  ArtBooks,
  ArtBrain,
  ArtBulb,
  ArtChat,
  ArtChart,
  ArtHeart,
  ArtPen,
} from "@/components/PsychArt";
import { SiteSection } from "@/components/SiteSection";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="relative min-h-full">
      <BlobCorners />

      <header className="sticky top-0 z-20 border-b border-[#0c1a5a]/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <a
            href="#top"
            className="font-[var(--font-hand)] text-2xl tracking-tight text-[#0b1b3b]"
          >
            {site.name}
          </a>
          <nav className="flex max-w-[min(58vw,520px)] flex-nowrap items-center justify-end gap-x-3 overflow-x-auto text-xs font-semibold tracking-wide text-[#0c1a5a]/70 sm:max-w-none sm:flex-wrap sm:justify-center md:gap-x-4 lg:justify-end">
            {site.nav.map((l) => (
              <a key={l.href} href={l.href} className="shrink-0 hover:text-[#0c1a5a]">
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#0c1a5a] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#142a8a]"
          >
            Say hi
          </a>
        </div>
      </header>

      <div id="top" />

      <SiteSection
        id="personal"
        variant="sky"
        kicker="Personal"
        title="Psychology student, educator-at-heart, former national athlete."
        description={site.tagline}
        art={
          <div className="flex items-center gap-3 opacity-95">
            <ArtBrain className="h-16 w-16" />
            <ArtHeart className="h-14 w-14 -translate-y-1" />
          </div>
        }
      >
        <DecoStrip />

        <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <ProfilePhoto />

          <div className="grid gap-6">
            <PaperCard
              eyebrow="About me"
              title="A little about how I think."
              right={
                <div className="flex gap-2">
                  <DoodleStar className="h-8 w-8 rotate-[-8deg]" />
                  <DoodleCandy className="h-10 w-16 rotate-[6deg]" />
                </div>
              }
            >
              <p className="text-[16px] leading-7">
                <span className="font-semibold text-[#0b1b3b]">
                  Education: NYU
                </span>{" "}
                — I’m studying Applied Psychology at New York University, with
                minors in{" "}
                <span className="font-semibold text-[#0b1b3b]">
                  Business Studies
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#0b1b3b]">
                  Child & Adolescent Mental Health
                </span>
                . I like turning research into experiences people can actually
                use — workshops, explainers, programs, and thoughtful media.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#eaf0ff] px-3 py-1 text-sm font-semibold text-[#0c1a5a]/80">
                  {site.location}
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#0c1a5a]/80 ring-1 ring-[#0c1a5a]/10">
                  GPA 3.872 / 4.00
                </span>
                <a
                  className="rounded-full border border-[#0c1a5a]/15 bg-white px-3 py-1 text-sm font-semibold text-[#0c1a5a]/80 hover:bg-[#eaf0ff]"
                  href={`mailto:${site.contact.email}`}
                >
                  Email
                </a>
              </div>
            </PaperCard>

            <div className="grid gap-4 sm:grid-cols-3">
              {site.highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl border border-[#0c1a5a]/10 bg-white/75 p-4 shadow-sm backdrop-blur-sm"
                >
                  <p className="text-[11px] font-bold tracking-[0.22em] text-[#0c1a5a]/55 uppercase">
                    {h.label}:
                  </p>
                  <p className="mt-1.5 font-semibold text-[#0b1b3b]">
                    {h.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#0b1b3b]/75">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>

            <PaperCard eyebrow="Field notes" title="What I’m doing lately">
              <ul className="grid gap-3">
                {site.now.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[#0c1a5a]" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </PaperCard>
          </div>
        </div>
      </SiteSection>

      <SiteSection
        id="play"
        variant="paper"
        kicker="Playground"
        title="Tiny psychology widgets — tap, slide, shuffle."
        description="A few playful elements to make the site feel alive (and a little nerdy)."
        art={
          <div className="flex items-center gap-2">
            <ArtBulb className="h-16 w-16" />
            <ArtChat className="h-14 w-14" />
          </div>
        }
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <MoodMeter />
          <BiasCard />
        </div>
      </SiteSection>

      <SiteSection
        id="portfolio"
        variant="sky"
        kicker="Portfolio"
        title="Experiences across media, museums, and sport."
        description="A few “portfolio-sized” stories — each mixes people, communication, and evidence."
        art={<ArtBooks className="h-20 w-20" />}
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {site.portfolio.map((p, i) => {
            const icons = [ArtPen, ArtChart, ArtBulb] as const;
            const Icon = icons[i % icons.length];
            return (
              <PaperCard
                key={p.title}
                eyebrow={`${p.label} · portfolio`}
                title={p.title}
                right={<Icon className="h-12 w-12 opacity-90" />}
              >
                <p>{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-[#eaf0ff] px-2.5 py-1 text-xs font-semibold text-[#0c1a5a]/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </PaperCard>
            );
          })}
        </div>
      </SiteSection>

      <SiteSection
        id="blog"
        variant="paper"
        kicker="Blog"
        title="Latest notes & mini explainers."
        description="Short updates you can skim in a minute — perfect for building a public learning log."
        art={<ArtChat className="h-20 w-20" />}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <ArtBrain className="h-12 w-12 text-[#0c1a5a]" />
            <ArtBooks className="h-12 w-12 text-[#0c1a5a]" />
            <ArtHeart className="h-12 w-12 text-[#0c1a5a]" />
            <ArtChart className="h-12 w-12 text-[#0c1a5a]" />
          </div>
          <p className="max-w-md text-sm leading-6 text-[#0b1b3b]/70">
            More posts can link out to Notion, Substack, or a `/blog` route
            later — this block is designed to look like a living timeline.
          </p>
        </div>

        <div className="grid gap-4">
          {site.blog.map((post) => (
            <article
              key={post.title}
              className="group relative grid overflow-hidden rounded-2xl border border-[#0c1a5a]/10 bg-white/80 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md sm:grid-cols-[minmax(140px,220px)_1fr]"
            >
              <div className="relative aspect-[5/4] min-h-[140px] sm:aspect-auto sm:min-h-[200px]">
                <Image
                  src={post.image}
                  alt={`Blog: ${post.title}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 220px"
                />
              </div>
              <div className="relative p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#0c1a5a]/55 uppercase">
                      Blog update:
                    </p>
                    <p className="mt-1 text-xs font-semibold tracking-[0.18em] uppercase text-[#0c1a5a]/55">
                      {post.date}
                    </p>
                    <h3 className="mt-2 font-[var(--font-hand)] text-2xl leading-snug text-[#0b1b3b] group-hover:text-[#142a8a]">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#0b1b3b]/75">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex h-fit shrink-0 items-center rounded-full bg-[#eaf0ff] px-3 py-1 text-xs font-semibold text-[#0c1a5a]/80">
                    {post.tag}
                  </span>
                </div>
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#c8d7ff]/35 blur-2xl transition group-hover:bg-[#c8d7ff]/55"
                  aria-hidden
                />
              </div>
            </article>
          ))}
        </div>
      </SiteSection>

      <SiteSection
        id="research"
        variant="sky"
        kicker="Research & writing"
        title="Publications and longer-form thinking."
        art={<ArtPen className="h-20 w-20" />}
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <PaperCard
            eyebrow="Publication · research"
            title={site.researchWriting[0].title}
            image={{
              src: site.researchWriting[0].image,
              alt: "Open journal and pen — representing writing and research",
            }}
            right={<DoodleCandy className="h-10 w-16 rotate-[-4deg]" />}
          >
            <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#0c1a5a]/55">
              {site.researchWriting[0].meta}
            </p>
            <p className="mt-3">{site.researchWriting[0].blurb}</p>
          </PaperCard>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-2xl border border-[#0c1a5a]/10 bg-white/75 shadow-sm backdrop-blur-sm">
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={site.skillsCardImage}
                  alt="Skills and data visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="p-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#0c1a5a]/55 uppercase">
                Skills & tools:
              </p>
              <p className="mt-1 font-[var(--font-hand)] text-3xl text-[#0b1b3b]">
                Course snapshot
              </p>
              <p className="mt-3 text-sm leading-7 text-[#0b1b3b]/75">
                Developmental psychology, behavioral statistics, cultural
                psychology, and marketing (including data analysis methods).
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "SPSS",
                  "Stata",
                  "Excel",
                  "PowerPoint",
                  "CapCut",
                  "iMovie",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[#eaf0ff] px-2.5 py-1 text-xs font-semibold text-[#0c1a5a]/75"
                  >
                    {t}
                  </span>
                ))}
              </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#0c1a5a]/10 bg-white/75 shadow-sm backdrop-blur-sm">
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={site.languagesCardImage}
                  alt="Languages and communication"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="p-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#0c1a5a]/55 uppercase">
                Languages:
              </p>
              <p className="mt-1 font-[var(--font-hand)] text-3xl text-[#0b1b3b]">
                Communication
              </p>
              <p className="mt-3 text-sm leading-7 text-[#0b1b3b]/75">
                Chinese, English (fluent), German (basic conversational).
              </p>
              </div>
            </div>
          </div>
        </div>
      </SiteSection>

      <SiteSection
        id="contact"
        variant="ink"
        kicker="Contact"
        title="Let’s build something thoughtful together."
        description="Research assistant roles, learning programs, or science communication collaborations."
        art={<ArtHeart className="h-20 w-20 text-white" />}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-sm leading-7 text-white/85">
              Tell me what you’re working on — I’m especially excited about
              projects that connect evidence, education, and real-world impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c1a5a] shadow-sm hover:bg-[#eaf0ff]"
                href={`mailto:${site.contact.email}`}
              >
                Email {site.name.split(" ")[0]}
              </a>
              <a
                className="rounded-full border border-white/25 bg-transparent px-4 py-2 text-sm font-semibold text-white hover:bg-white/10"
                href="#personal"
              >
                Back to personal
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">
              Direct lines
            </p>
            <p className="mt-3 text-sm leading-7 text-white/85">
              Email:{" "}
              <a className="underline decoration-white/40 hover:decoration-white" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </p>
            <p className="mt-2 text-sm leading-7 text-white/85">
              Phone: {site.contact.phone}
            </p>
          </div>
        </div>

        <footer className="mx-auto mt-10 max-w-6xl text-center text-xs text-white/55">
          © {new Date().getFullYear()} {site.name}. Built with care.
        </footer>
      </SiteSection>
    </div>
  );
}
