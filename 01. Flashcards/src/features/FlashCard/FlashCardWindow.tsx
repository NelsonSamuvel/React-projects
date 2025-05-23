import CardActions from "./CardActions";
import CardProgress from "./CardProgress";
import SingleCard from "./SingleCard";
import { useFlashCardContext } from "../../context/FlashCardProvider";
import FlashCardSkeleton from "./FlashCardSkeleton";

const FlashCardWindow = () => {

  const {selectedFlashcards,flashCardLoading,activeCategory,appLoading} = useFlashCardContext();


  if(flashCardLoading){
    return <FlashCardSkeleton />
  }

  return (
    <>
    <div className="border border-slate-900 mt-4 ml-4 px-6 py-3">
      {(selectedFlashcards?.length && !appLoading) ? <>
      <CardProgress activeCategory={activeCategory}/>
      <div className="mt-4 px-8">
        <SingleCard card={selectedFlashcards[0]}/>
        <CardActions />
      </div>
      </> : null
      }
    </div>
    </>
  );
};

export default FlashCardWindow;
