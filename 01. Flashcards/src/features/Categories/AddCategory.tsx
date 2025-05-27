import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import CategoryForm from "./CategoryForm";

const AddCategory = () => {

  const [isOpen,setIsOpen] = useState(false)

  const handleOpenModal = ()=>{
    setIsOpen(open => !open)
  }

  return (
    <>
    <button onClick={handleOpenModal} className="flex  items-center justify-center  hover:brightness-90 filter p-2 cursor-pointer">
      <CirclePlus className="w-6 h-6 hover:opacity-50 text-amber-600" />
    </button>
    {isOpen && <Modal title="Add new Category" isOpen={isOpen} onClose={handleOpenModal}>
      <CategoryForm/>
      </Modal>}
    </>
  );
};

export default AddCategory;
