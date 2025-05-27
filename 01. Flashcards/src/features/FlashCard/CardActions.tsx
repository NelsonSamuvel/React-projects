import clsx from "clsx";
import { ArrowLeftCircle, ArrowRightCircle, FlipVertical, ListRestart, RefreshCcw, TimerReset } from "lucide-react";

interface CardActionsProps{
  handlePrevBtn:()=>void,
  handleNextBtn:()=>void,
  handleFlip:()=>void,
  isFlipped:boolean
}

const CardActions = ({handlePrevBtn,handleNextBtn,handleFlip,isFlipped}:CardActionsProps) => {
  return (
    <div className="mt-6 flex items-center max-w-md mx-auto justify-between text-lg font-semibold">
      <button onClick={handlePrevBtn} className="cursor-pointer px-4 py-2 rounded-full bg-slate-900 transition-all duration-300 hover:bg-slate-800 flex items-center gap-3">
        <ArrowLeftCircle className="w-5 h-5" />
        <span>Previous</span>
      </button>
      <button onClick={handleFlip} className={clsx("cursor-pointer px-4 py-2 rounded-md  flex items-center gap-3",isFlipped ? "bg-yellow-600" : "bg-amber-600")}>
        {isFlipped ? <>
          <RefreshCcw className="w-5 h-5" />
          <span>Revert</span>
        </> : <>
          <FlipVertical className="w-5 h-5" />
          <span>Flip</span>
        </>}
      </button>
      <button onClick={handleNextBtn} className="cursor-pointer px-4 py-2 rounded-full flex items-center gap-3 bg-slate-900 transition-all duration-300 hover:bg-slate-800">
        <span>Next</span>
        <ArrowRightCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CardActions;
