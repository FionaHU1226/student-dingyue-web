export function DoodleStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M60 10l12 34 36 1-28 20 10 35-30-21-30 21 10-35-28-20 36-1 12-34z"
        fill="none"
        stroke="#0c1a5a"
        strokeWidth="6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleCandy({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 120"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M44 60c-20 0-32-14-32-24 0-10 10-18 22-10-8-18 16-30 30-16 10-18 38-8 32 16 14-6 24 0 24 10 0 12-14 24-34 24H44z"
        fill="#c8d7ff"
        stroke="#0c1a5a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M130 60c20 0 32-14 32-24 0-10-10-18-22-10 8-18-16-30-30-16-10-18-38-8-32 16-14-6-24 0-24 10 0 12 14 24 34 24h42z"
        fill="#c8d7ff"
        stroke="#0c1a5a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <rect
        x="46"
        y="28"
        width="88"
        height="64"
        rx="26"
        fill="#ffffff"
        stroke="#0c1a5a"
        strokeWidth="6"
      />
      <path
        d="M72 50c10-10 26-10 36 0"
        fill="none"
        stroke="#0c1a5a"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M74 70c8 8 24 8 32 0"
        fill="none"
        stroke="#0c1a5a"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BlobCorners() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#c8d7ff]/55 blur-2xl" />
      <div className="absolute -right-28 -top-36 h-72 w-72 rounded-full bg-[#0c1a5a]/12 blur-2xl" />
      <div className="absolute -right-32 -bottom-28 h-80 w-80 rounded-full bg-[#eaf0ff] blur-2xl" />
      <div className="absolute -left-28 -bottom-36 h-72 w-72 rounded-full bg-[#0c1a5a]/10 blur-2xl" />
    </div>
  );
}

