import Image from "next/image";

export function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-[min(100%,280px)]">
      <div
        className="absolute -inset-3 -z-10 rotate-[-3deg] rounded-[40px] bg-[linear-gradient(135deg,#c8d7ff,#eaf0ff)] opacity-90"
        aria-hidden
      />
      <div className="relative rotate-[2deg] rounded-[36px] border-4 border-white bg-white p-2 shadow-[8px_10px_0_#0c1a5a]">
        <div className="relative aspect-[298/408] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#eaf0ff,#ffffff)]">
          <Image
            src="/images/ski_1.jpeg"
            alt="Dingyue Zhang skiing"
            fill
            sizes="280px"
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
      <p className="mt-4 text-center font-[var(--font-hand)] text-2xl text-[#0b1b3b]">
        Hi, I’m Dingyue
      </p>
    </div>
  );
}
