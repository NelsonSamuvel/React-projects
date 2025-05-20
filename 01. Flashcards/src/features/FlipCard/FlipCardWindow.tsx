import CardActions from "./CardActions";
import CardProgress from "./CardProgress";
import SingleCard from "./SingleCard";

const FlipCardWindow = () => {
  return (
    <div className="border border-slate-900 mt-4 ml-4 px-6 py-3">
      <CardProgress />
      <div className="mt-4 px-8">
        <SingleCard />
        <CardActions />
      </div>
    </div>
  );
};

export default FlipCardWindow;
