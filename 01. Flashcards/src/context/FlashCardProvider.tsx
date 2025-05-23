import { createContext, useContext, useEffect, useState } from "react";
import type { Category, FlashCard } from "../types/types";
import { useFlashCard } from "../hooks/useFlashCard";
import { getAllFlashcardsByCategory } from "../services/mock-api";


interface FlashCardContextType {
    flashcards: FlashCard[];
    categories: Category[];
    handleSelectCategory: (category: Category) => void;
    activeCategory: Category | null;
    selectedFlashcards: FlashCard[];
    flashCardLoading: boolean;
    appLoading: boolean;
}

const FlashCardContext = createContext<FlashCardContextType | null>(null);


interface FlashCardProviderProps {
    children: React.ReactNode;
    handleLoading: (isLoading: boolean) => void;
    appLoading: boolean;
}

const FlashCardProvider = ({children,handleLoading,appLoading}:FlashCardProviderProps) => {

    const {categories,fetchCategories} = useFlashCard();


    const [flashcards,setFlashcards] = useState<FlashCard[]>([]);


    const [activeCategory,setActiveCategory] = useState<Category | null>(null);
    const [selectedFlashcards,setSelectedFlashcards] = useState<FlashCard[]>([]);

    // Loader
    const [flashCardLoading,setFlashCardLoading] = useState(false);

    const loadInitialData = async ()=>{
        try {
          handleLoading(true)
         const categories = await fetchCategories();
         if(categories?.length){
             setActiveCategory(categories[0])  
             fetchFlashcardsByCategory(categories[0].id); 
         }
    
        } catch (error) {
          console.log(error)
        } finally{
          handleLoading(false)
        }
      }

      const fetchFlashcardsByCategory = async (categoryId:number)=>{
        if(!categoryId){
            return;
        }
        try {
            setFlashCardLoading(true);
            const flashcards = await getAllFlashcardsByCategory(categoryId);
            if(flashcards && Array.isArray(flashcards)){
                setSelectedFlashcards(flashcards);
            }
        } catch (error) {
            console.log(error)
        }finally{            
            setFlashCardLoading(false);
        }
      }
    
      useEffect(()=>{
         loadInitialData();
      },[])

    const handleSelectCategory = async(category:Category)=>{
        setActiveCategory(category);
        fetchFlashcardsByCategory(category.id);
    }

    

    return <FlashCardContext.Provider value={{flashcards,categories,handleSelectCategory,activeCategory,selectedFlashcards,flashCardLoading,appLoading}}>{children}</FlashCardContext.Provider>
}

export const useFlashCardContext = ()=>{
    const context = useContext(FlashCardContext);
    if(!context){
        throw new Error("useFlashCardContext must be used within a FlashCardProvider");
    }
    return context;
}

export default FlashCardProvider