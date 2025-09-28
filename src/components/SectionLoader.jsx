export const SectionLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-radial from-sky-950/95 via-gray-950/95 to-black/90 text-white">
    <div className="flex items-center">
      <img
        src="/react.svg"
        alt="React Logo"
        className="w-28 h-28 animate-[spin_2s_linear_infinite] mb-8 drop-shadow-[0_0_6px_oklch(86.5%_0.127_207.078)]"
      />
    </div>
    <p className="text-base md:text-lg text-gray-300 tracking-wide animate-pulse max-w-[180px] text-center">
      Preparing React components, pages & elements...
    </p>
  </div>
);
