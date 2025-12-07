import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Heart } from "lucide-react";

const MySwal = withReactContent(Swal);

export default function LinuxHeader() {
  const handleClose = () => {
    MySwal.fire({
      showConfirmButton: false,
      background: "transparent",
      customClass: {
        popup: "p-0 bg-transparent shadow-none",
      },
      html: (
        <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-900 text-white shadow-2xl border border-zinc-700">
          <div className="flex items-center space-x-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
            <button id="mac-close" className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
          </div>
          <div className="p-8 text-center">
            <div className="bg-gradient-to-br from-rose-500/10 to-rose-500/30 border border-pink-700 rounded-md w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 mx-auto text-pink-400" />
            </div>
            <h2 className="text-lg font-bold mb-2">Thank you</h2>
            <p className="text-zinc-300">
              Thank you for visiting my portfolio website.
            </p>
          </div>
        </div>
      ),
      didOpen: () => {
        const btn = document.getElementById("mac-close");
        if (btn) {
          btn.addEventListener("click", () => Swal.close());
        }
      },
    });
  };

  return (
    <div className="flex items-center justify-between py-2 md:py-1.5 px-4 md:px-5 border-b border-white/10 bg-white/5 rounded-t-sm">
      <div className="flex items-center space-x-1.5 md:space-x-2">
        <button onClick={handleClose} className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-700 border border-red-700/70 transition-all appearance-none p-0" title="Close?"/>
        <span className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:bg-yellow-700 border border-yellow-700/70" />
        <span className="w-3.5 h-3.5 rounded-full bg-green-500 hover:bg-green-700 border border-green-700/70" />
      </div>
      <p className="text-sm md:text-base text-gray-500">Contact-Form</p>
    </div>
  );
}
