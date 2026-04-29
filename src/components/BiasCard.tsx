"use client";

import { useEffect, useMemo, useState } from "react";

const biases = [
  {
    name: "Confirmation bias",
    gist: "We search for evidence that confirms what we already believe.",
    try: "Ask: “What would change my mind?” and look for one disconfirming data point.",
  },
  {
    name: "Availability heuristic",
    gist: "We judge likelihood by what comes to mind easily (often vivid stories).",
    try: "Swap anecdotes for base rates: “How common is this in real data?”",
  },
  {
    name: "Fundamental attribution error",
    gist: "We over-attribute others’ behavior to personality and underweight situation.",
    try: "List two situational reasons before you label a trait.",
  },
  {
    name: "Planning fallacy",
    gist: "We underestimate time and overestimate smooth progress.",
    try: "Use reference class forecasting: compare to similar tasks you’ve done.",
  },
] as const;

export function BiasCard() {
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10_000));
  }, []);

  const item = useMemo(() => {
    const idx = seed % biases.length;
    return biases[idx];
  }, [seed]);

  return (
    <div className="rounded-2xl border border-[#0c1a5a]/10 bg-white/70 px-4 py-4 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="font-[var(--font-hand)] text-2xl text-[#0b1b3b]">
          Bias of the moment
        </p>
        <button
          type="button"
          onClick={() => setSeed((s) => s + 1)}
          className="rounded-full border border-[#0c1a5a]/15 bg-white px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase text-[#0c1a5a]/70 shadow-sm hover:bg-[#eaf0ff]"
        >
          Shuffle
        </button>
      </div>

      <div className="mt-3 rounded-xl bg-[#eaf0ff] px-3 py-2">
        <p className="font-semibold text-[#0b1b3b]">{item.name}</p>
        <p className="mt-1 text-sm leading-6 text-[#0b1b3b]/80">{item.gist}</p>
        <p className="mt-2 text-sm leading-6 text-[#0b1b3b]/80">
          <span className="font-semibold">Try:</span> {item.try}
        </p>
      </div>
    </div>
  );
}

