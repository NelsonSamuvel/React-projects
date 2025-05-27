import { X } from "lucide-react"

interface ModalProps{
    children:React.ReactNode,
    title:string,   
    isOpen:boolean,
    onClose:()=>void
}

const Modal = ({children,title,isOpen,onClose}:ModalProps) => {

    if(!isOpen) return null;
  return (
    <div className="bg-slate-900/50 text-gray-200 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm  w-full">
    <div className="bg-slate-800 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button className="block cursor-pointer"  onClick={onClose}><X className="w-5 h-5"/></button>
        </div>
        <div>
            {children}
        </div>
        </div>
    </div>
  )
}

export default Modal