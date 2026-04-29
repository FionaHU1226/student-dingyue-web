import {
  ArtBooks,
  ArtBrain,
  ArtBulb,
  ArtChart,
  ArtChat,
  ArtHeart,
  ArtPen,
} from "@/components/PsychArt";

export function DecoStrip() {
  const items = [
    { Icon: ArtBrain, label: "Psychology" },
    { Icon: ArtBooks, label: "Learning" },
    { Icon: ArtBulb, label: "Ideas" },
    { Icon: ArtHeart, label: "Wellbeing" },
    { Icon: ArtChart, label: "Data" },
    { Icon: ArtChat, label: "Stories" },
    { Icon: ArtPen, label: "Writing" },
  ] as const;

  return (
    <div
      className="-mx-1 flex gap-4 overflow-x-auto pb-1 pt-1 [scrollbar-width:thin]"
      aria-hidden
    >
      {items.map(({ Icon, label }) => (
        <div
          key={label}
          className="flex shrink-0 flex-col items-center gap-2 rounded-2xl border border-[#0c1a5a]/10 bg-white/70 px-4 py-3 shadow-sm"
        >
          <Icon className="h-10 w-10 text-[#0c1a5a]" />
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#0c1a5a]/55">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
