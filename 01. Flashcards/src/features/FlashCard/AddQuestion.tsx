import { Plus } from "lucide-react"
import { useState } from "react"
import Modal from "../../components/ui/Modal";
import QuestionForm from "../Questions/QuestionForm";

const AddQuestion = () => {

    const [isOpenModal,setIsOpenModal] = useState(false);

    const handleClose = ()=>{
        setIsOpenModal(open => !open);
    }

    const handleSubmit = ()=>{

    }

  return (
    <>
    <div className="flex flex-col gap-4 items-center justify-center h-full">
        <h2 className="text-xl font-semibold">No questions found on this category</h2>
        <button onClick={handleClose} className="bg-amber-600 cursor-pointer text-white px-4 py-2 rounded-md flex items-center gap-2">
            <Plus className="w-4 h-4"/>
            <span>Add Question</span>
        </button>
    </div>
    <Modal title="Add new Question" isOpen={isOpenModal} onClose={handleClose}>
        <QuestionForm onSubmit={handleSubmit}/>
    </Modal>
    </>
  )
}

export default AddQuestion