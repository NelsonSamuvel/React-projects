

const FlashCardSkeleton = () => {
  return (
    <div className="border border-slate-900 mt-4 ml-4 px-6 py-3 animate-pulse">
      {/* Progress Bar Skeleton */}

      <div className="flex items-center mt-2 ">

        <div className="w-1/3 h-5 mb-2 bg-slate-700 " />
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full mt-2">
    
      </div>
      
      {/* Card Content Skeleton */}
      <div className="mt-4 px-8">
        {/* Card Skeleton */}<div className="w-full h-72 bg-slate-900 rounded-lg flex items-center justify-center ">
        </div>
        {/* Actions Skeleton */}
        <div className="mt-6 flex items-center max-w-md mx-auto justify-between text-lg font-semibold">
      <button className="cursor-pointer px-4 py-2 rounded-full w-24 h-8 bg-slate-700 transition-all duration-300 hover:bg-slate-800 flex items-center gap-3">
        
      </button>
      <button className="cursor-pointer px-4 py-2 w-24 h-8 rounded-md bg-slate-700 flex items-center gap-3">
       
      </button>
      <button className="cursor-pointer px-4 py-2 rounded-full w-24 h-8 flex items-center gap-3 bg-slate-700 transition-all duration-300 hover:bg-slate-800">
        
      </button>
    </div>
    </div>
    </div>
  );
};

export default FlashCardSkeleton; 