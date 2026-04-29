"use client";

import { useMemo, useState } from "react";

const messages = [
  { at: 0, label: "Low energy", note: "Small wins count. Try a 2-minute start." },
  { at: 25, label: "Warming up", note: "Pick one task and make it tiny." },
  { at: 50, label: "Steady", note: "Good moment for deep work (25 minutes)." },
  { at: 75, label: "Focused", note: "Capture your plan, then execute." },
  { at: 100, label: "Flow", note: "Protect it: silence notifications." },
] as const;

export function MoodMeter() {
  const [v, setV] = useState(58);

  const msg = useMemo(() => {
    const sorted = [...messages].sort((a, b) => a.at - b.at);
    let current = sorted[0];
    for (const m of sorted) {
      if (v >= m.at) current = m;
    }
    return current;
  }, [v]);

  return (
    <div className="rounded-2xl border border-[#0c1a5a]/10 bg-white/70 px-4 py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3">
        <p className="font-[var(--font-hand)] text-2xl text-[#0b1b3b]">
          Mood meter
        </p>
        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#0c1a5a]/55">
          {msg.label}
        </span>
      </div>
      <div className="mt-3">
        <input
          aria-label="Mood meter slider"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => setV(Number(e.target.value))}
          className="w-full accent-[#142a8a]"
        />
        <div className="mt-3 rounded-xl bg-[#eaf0ff] px-3 py-2 text-sm leading-6 text-[#0b1b3b]/80">
          {msg.note}
        </div>
      </div>
    </div>
  );
}

