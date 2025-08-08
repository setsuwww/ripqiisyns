import Swal from 'sweetalert2'

export default function LinuxHeader() {
  const handleClose = () => {
    Swal.fire({ icon: 'question', title: 'Why u close it?', text: 'This is my fun effect for the Swalfire test', confirmButtonColor: '#6366f1', confirmButtonText: 'Wkwkwk'})
  }

  return (
    <div className="flex items-center justify-between space-x-2 py-3 px-6 md:px-10 border-b border-white/10 bg-white/5 rounded-t-2xl">
      <h1 className="font-pixel text-gray-500">ContactForm.jsx</h1>

      <div className="flex items-center space-x-2">
        <span className="w-4 h-4 bg-green-400 rounded-full" />
        <span className="w-4 h-4 bg-yellow-400 rounded-full" />
        
        <button onClick={handleClose} className="w-4 h-4 bg-rose-400 rounded-full flex items-center justify-center text-[8px] text-rose-100 hover:bg-rose-500 transition-all" title="Close?">
          <span className='text-white font-semibold text-base'>×</span>
        </button>
      </div>
    </div>
  )
}