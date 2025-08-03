export const SectionLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-white">
    {/* Spinner */}
    <div className="w-36 h-36 border-[6px] border-t-transparent border-white rounded-full animate-spin mb-8"></div>

    {/* Text */}
    <p className="text-base md:text-lg text-gray-300 tracking-wide animate-pulse">
      Preparing React components, pages & elements
    </p>
  </div>
);
