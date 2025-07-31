export default function BallsBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-300/10 rounded-full blur-3xl" data-aos="zoom-in" data-aos-duration="1500" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" data-aos="zoom-in" data-aos-duration="1500"/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-400/10 rounded-full blur-2xl" data-aos="zoom-in" data-aos-duration="1500" />
    </div>
  )
}
