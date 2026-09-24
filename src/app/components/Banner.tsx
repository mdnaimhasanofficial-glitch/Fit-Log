import Image from "next/image";

const Banner = () => {
  return (
    <div key="banner" className="w-full px-4 py-6 bg-[#090a0f]">
      <div className="container mx-auto bg-[#12141d] rounded-2xl p-8 md:p-14 border border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        {/* Left Side: Content */}
        <div className="max-w-xl z-10">
          {/* Subtitle */}
          <span className="text-lime-400 text-xs font-bold tracking-widest uppercase block mb-4">
            WORKOUT LIBRARY
          </span>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-[1.1] mb-5">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          {/* Paragraph */}
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Action Button */}
          <button className="bg-[#ccff00] hover:bg-[#b3e600] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-colors">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="relative w-full md:w-105 h-70 md:h-85 flex items-center justify-center shrink-0">
          <Image
            src="/banner.png"
            alt="Workout Exercise"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
