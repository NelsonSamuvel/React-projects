

import { useFlashCardContext } from "../../context/FlashCardProvider";

import clsx from "clsx";
import type { Category } from "../../types/types";



const CategoriesList = () => {
  const {categories,activeCategory,handleSelectCategory,isFlipped,handleFlip} = useFlashCardContext();

  const handleCategoryClick = (category:Category)=>{
    if(isFlipped){
      handleFlip();
    }
    handleSelectCategory(category);
  }

  return (
    <ul className="space-y-4 px-4 pt-2 pb-6">
      {categories.map((category) => (
        <li
          key={category.id}   
          style={{color:category.color}}
        >
            <button className={clsx("px-4 py-2 flex justify-between w-full cursor-pointer     border border-slate-700 rounded-md  hover:opacity-60 transition duration-150", activeCategory?.id === category.id && "bg-slate-800")}  onClick={()=>handleCategoryClick(category)}>
           <span>{category.name}</span>
           <span>{category.flashcardCount}</span>
            </button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
