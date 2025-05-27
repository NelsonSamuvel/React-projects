import CardActions from "./CardActions";
import CardProgress from "./CardProgress";
import SingleCard from "./SingleCard";
import { useFlashCardContext } from "../../context/FlashCardProvider";
import FlashCardSkeleton from "./FlashCardSkeleton";
import { useCallback, useEffect, useState } from "react";
import type { FlashCard } from "../../types/types";

const FlashCardWindow = () => {

  const {selectedFlashcards,flashCardLoading,activeCategory,appLoading} = useFlashCardContext();

  const [currentCardIndex,setCurrentCardIndex] = useState(1);
  const [currentFlashcard,setCurrentFlashcard] = useState<FlashCard | null>(null);

 
  const {isFlipped,handleFlip} = useFlashCardContext();


  const handlePrevBtn = useCallback(
    ()=>{
      if(isFlipped){
        handleFlip()
      }
      setCurrentCardIndex(curIndex =>{
        const index = curIndex === 1 ? curIndex : curIndex-1;
        handleCurrentFlashcard(curIndex === 1 ? selectedFlashcards[0] : selectedFlashcards[index-1]);
        return index;
      } 
    )
    
  },[selectedFlashcards,isFlipped])

  const handleNextBtn = useCallback(
    ()=>{
      if(isFlipped){
        handleFlip()
      }
      setCurrentCardIndex(curIndex =>{
        const index = curIndex === selectedFlashcards?.length ? curIndex : curIndex+1
        handleCurrentFlashcard(curIndex === selectedFlashcards?.length ? selectedFlashcards[selectedFlashcards.length-1] :  selectedFlashcards[index-1]);
        return index;
    } )
    
  },[selectedFlashcards,isFlipped])

  const handleCurrentFlashcard = (flashcard:FlashCard)=>{
    setCurrentFlashcard(flashcard);
  }



  useEffect(()=>{
    if(selectedFlashcards.length){
      setCurrentFlashcard(selectedFlashcards[0]);
      setCurrentCardIndex(1);
    }
  },[selectedFlashcards])


  useEffect(()=>{
    const handleKeyDown = (e:KeyboardEvent)=>{  
      if(e.key === "ArrowLeft"){
        handlePrevBtn()
      }else if(e.key === "ArrowRight"){
        handleNextBtn()
      }
    }
    document.addEventListener("keydown",handleKeyDown)

    return ()=>{
      document.removeEventListener("keydown",handleKeyDown)
    }
  },[handlePrevBtn,handleNextBtn])



  if(flashCardLoading){
    return <FlashCardSkeleton />
  }

  return (
    <>
    <div className="border border-slate-900 mt-4 ml-4 px-6 py-3">
      {(selectedFlashcards?.length && !appLoading) ? <>
      <CardProgress activeCategory={activeCategory} flashcardCount={selectedFlashcards.length} currentCardIndex={currentCardIndex}/>
      <div className="mt-4 px-8">
        <SingleCard card={currentFlashcard} isFlipped={isFlipped} color  = {activeCategory?.color || ""}/>
        <CardActions handlePrevBtn={handlePrevBtn} handleNextBtn={handleNextBtn} handleFlip={handleFlip} isFlipped={isFlipped}/>
      </div>
      </> : null
      }
    </div>
    </>
  );
};

export default FlashCardWindow;
