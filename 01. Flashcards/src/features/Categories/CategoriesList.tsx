
import { useEffect, useState } from "react";
import { useFlashCardContext } from "../../context/FlashCardProvider";
import type { CategoriesMenuProps } from "./CategoriesMenu";
import type { Category } from "../../types/types";
import clsx from "clsx";



const CategoriesList = () => {
  const {categories,activeCategory,handleSelectCategory,flashCardLoading} = useFlashCardContext();




  return (
    <ul className="mt-4 space-y-4">
      {categories.map((category) => (
        <li
          key={category.id}         
        >
          <button className={clsx("px-4 py-2 block w-full cursor-pointer  justify-between   border border-slate-700 rounded-md  hover:opacity-60 transition duration-150", activeCategory?.id === category.id && "bg-slate-800")}  onClick={()=>handleSelectCategory(category)}>{category.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
