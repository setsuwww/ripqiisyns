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
            <button id="mac-close" className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600"/>
            <span className="w-3 h-3 rounded-full bg-violet-400 hover:bg-violet-500" />
            <span className="w-3 h-3 rounded-full bg-sky-500 hover:bg-sky-600" />
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
    <div className="flex items-center justify-between py-3 px-6 md:px-8 border-b border-white/10 bg-white/5 rounded-t-2xl">
      <div className="flex items-center space-x-2">
        <button
          onClick={handleClose}
          className="w-4 h-4 rounded-full bg-rose-500 hover:bg-rose-600 transition-all appearance-none border-0 p-0"
          title="Close?"
        />
        <span className="w-4 h-4 rounded-full bg-violet-500" />
        <span className="w-4 h-4 rounded-full bg-sky-500" />
      </div>
      <h1 className="text-gray-500">Contact-Me</h1>
    </div>
  );
}
