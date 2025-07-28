export default function TitleForm({ title, className }) {
  return (
    <h2 className={`${className} font-pirata text-2xl font-bold bg-gradient-to-r from-yellow-400 to-violet-500 bg-clip-text text-transparent mb-6`}>
      {title}
    </h2>
  )
}
