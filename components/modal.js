import React from "react";

export default function Modal({ code, setOpen }) {

  const handleCopy = () => {
    window.navigator.clipboard.writeText(code)
    setOpen(false)
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center -mt-20 items-center absolute top-0 left-0">
      <div className="w-2/4 h-3/2 overflow-y-scroll overflow-x-hidden bg-white p-8 shadow-lg  flex flex-col items-center gap-6">
        <textarea className="w-full h-96 outline-none border-none resize-none">{code}</textarea>
        <div className="flex flex-row gap-5 ">
        <button onClick={handleCopy} className="bg-blue-700 text-white p-3 rounded-md">
          Copy to Clipboard
        </button>
        <button onClick={()=>setOpen(false)} className="bg-red-700 text-white p-3 rounded-md">
          Cancel
        </button>
      </div>
      </div>
      
    </div>
  );
}
