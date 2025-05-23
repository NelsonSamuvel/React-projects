import { Dot } from "lucide-react";
import type { Category } from "../../types/types";

const CardProgress = ({activeCategory}:{activeCategory:Category | null}) => {
  return (
    <div>
      <p className="flex items-center text-xl ">
        <span>{activeCategory ? activeCategory.name : ""}</span>
        <Dot className="w-8 h-8" />
        <span>
          Card <span className="">1</span> of 20
        </span>
      </p>
      <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
        <div className="w-1/3 h-full bg-amber-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardProgress;
