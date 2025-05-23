import {  useState } from "react";
import { getAllCategories } from "../services/mock-api";
import type { Category } from "../types/types";

export const useFlashCard = ()=>{
    const [categories,setCategories] = useState<Category[]>([])

    const fetchCategories = async ()=>{
            const categories  = await getAllCategories();
           if(categories && Array.isArray(categories)){
            setCategories(categories);
            return categories;
           }
        }
        
    return {categories,fetchCategories}
    
}