import { Dot } from "lucide-react";
import type { Category } from "../../types/types";

interface CardProgressProps{
  activeCategory:Category | null,
  flashcardCount:number,
  currentCardIndex:number
}

const CardProgress = ({activeCategory,flashcardCount,currentCardIndex}:CardProgressProps) => {
  return (
    <div>
      <p className="flex items-center text-xl ">
        <span>{activeCategory ? activeCategory.name : ""}</span>
        <Dot className="w-8 h-8" />
        <span>
          Card <span className="">{currentCardIndex}</span> of {flashcardCount}
        </span>
      </p>
      <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
        <div 
          style={{ width: `${(100 / flashcardCount) * currentCardIndex}%` }}
          className="h-full bg-amber-600 rounded-full transition-all duration-300 ease-in-out"
        ></div>
      </div>
    </div>
  );
};

export default CardProgress;
