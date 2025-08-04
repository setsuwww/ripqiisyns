import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselNav = React.memo(function CarouselNav({ onPrev, onNext, current, total }) {
  const baseClass = "absolute top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 z-10";

  return (
    <>
      <button onClick={onPrev} disabled={current === 0} className={`${baseClass} left-0 -translate-x-2`}>
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button onClick={onNext} disabled={current === total - 1} className={`${baseClass} right-0 translate-x-2`}>
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </>
  );
});

export default CarouselNav;
