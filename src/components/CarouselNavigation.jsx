import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CarouselNav({ onPrev, onNext, current, total }) {
  return (
    <>
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 z-10"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 z-10"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </>
  )
}
