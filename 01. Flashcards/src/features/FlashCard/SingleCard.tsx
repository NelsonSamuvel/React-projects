import type { FlashCard } from "../../types/types";

const SingleCard = ({card}:{card:FlashCard}) => {
  return (
    <>
      <div className="w-full h-72 bg-slate-900 rounded-lg flex items-center justify-center ">
        <p className="text-2xl font-semibold">{card.question}</p>
      </div>
    </>
  );
};

export default SingleCard;
