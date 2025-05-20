import { Dot } from "lucide-react";

const CardProgress = () => {
  return (
    <div>
      <p className="flex items-center text-xl ">
        <span>Mathematics</span>
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
