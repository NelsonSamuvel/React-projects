import { CirclePlus } from "lucide-react";
import { useState } from "react";
import Modal from "../../components/ui/Modal";
import CategoryForm from "./CategoryForm";
import type { Category } from "../../types/types";
import { useFlashCardContext } from "../../context/FlashCardProvider";
import { addNewCategory } from "../../services/mock-api";

const AddCategory = () => {

  const [isOpen,setIsOpen] = useState(false);
  const {handleSelectCategory} = useFlashCardContext()

  const handleOpenModal = ()=>{
    setIsOpen(open => !open)
  }

  const handleSubmit = async(category:Category)=>{
    try {
     
      const newCategory = await addNewCategory(category);
      setIsOpen(false);
      handleSelectCategory(newCategory);
  } catch (error) {
      console.error("Error adding category:", error);
  }
  }

  return (
    <>
    <button onClick={handleOpenModal} className="flex  items-center justify-center  hover:brightness-90 filter p-2 cursor-pointer">
      <CirclePlus className="w-6 h-6 hover:opacity-50 text-amber-600" />
    </button>
    {isOpen && <Modal title="Add new Category" isOpen={isOpen} onClose={handleOpenModal}>
      <CategoryForm onSubmit={handleSubmit}/>
      </Modal>}
    </>
  );
};

export default AddCategory;
