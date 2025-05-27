import type { FlashCard } from "../../types/types";

interface SingleCardProps{
  card:FlashCard | null,
  isFlipped:boolean,
  color:string
}

const SingleCard = ({card,isFlipped,color}:SingleCardProps) => {
  return (
    <>
      <div className="w-full h-72 bg-slate-900 rounded-lg transition-all flex items-center justify-center px-8">
        <p className="text-2xl text-center font-semibold" style={{color:color}}>{card ? isFlipped ? card.answer : card.question : ""}</p>
      </div>
    </>
  );
};

export default SingleCard;
