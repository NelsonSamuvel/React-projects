
import { useEffect, useState } from "react";
import { useFlashCardContext } from "../../context/FlashCardProvider";
import type { CategoriesMenuProps } from "./CategoriesMenu";
import type { Category } from "../../types/types";
import clsx from "clsx";



const CategoriesList = () => {
  const {categories,activeCategory,handleSelectCategory} = useFlashCardContext();




  return (
    <ul className="mt-4 space-y-4">
      {categories.map((category) => (
        <li
          key={category.id}
          className={clsx("flex justify-between px-4 py-2 border border-slate-700 rounded-md cursor-pointer hover:opacity-60 transition duration-150",
            activeCategory?.id === category.id && "bg-slate-800"
          )}
          onClick={()=>handleSelectCategory(category)}
        >
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
