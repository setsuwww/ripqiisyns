const avatars = [
  { src: "/assets/sg.jpg", alt: "User 1" },
  { src: "/assets/zv.png", alt: "User 2" },
  { src: "/assets/idol3.png", alt: "User 3" },
  { src: "/assets/idol4.png", alt: "User 4" },
  { src: "/assets/idol5.jpg", alt: "User 5" },
]

export default function Idols() {
  return (
    <div className="flex -space-x-4 mt-4">
      {avatars.map((avatar, index) => (
        <img
          loading="lazy"
          key={index}
          className="w-10 h-10 rounded-full border border-white"
          src={avatar.src}
          alt={avatar.alt}
        />
      ))}
    </div>
  )
}
