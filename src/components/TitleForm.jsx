export default function TitleForm({ title, className }) {
  return (
    <h2 className={`${className} font-pirata text-2xl font-bold gradient-text mb-6`}>
      {title}
    </h2>
  )
}
