export default function ListView({ title = 'Currently Learning', items, aos = 'fade-down', aosDuration = '1500' }) {
  return (
    <div className="glass-effect rounded-2xl p-8"
      data-aos={aos}
      data-aos-duration={aosDuration}
    >
      <h3 className="text-2xl font-bold gradient-text mb-6">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="relative w-3 h-3">
              <div className={`absolute inset-0 rounded-full ${item.color} opacity-75 animate-ping`} />
              <div className={`relative w-full h-full rounded-full ${item.color} animate-pulse`}/>
            </div>
            <span className="text-gray-300">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
