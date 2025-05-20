import { CirclePlus } from "lucide-react";

const AddCategory = () => {
  return (
    <button className="flex items-center justify-center mb-4 bg-amber-600 hover:brightness-90 filter p-2 rounded-full cursor-pointer">
      <CirclePlus className="w-6 h-6 hover:text-gray-300" />
      <span className="ml-2">AddCategory</span>
    </button>
  );
};

export default AddCategory;
