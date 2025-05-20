import AddCategory from "./AddCategory";
import CategoriesList from "./CategoriesList";

const CategoriesMenu = () => {
  return (
    <div className="border border-slate-900 w-64 px-4 py-3 mt-4 flex flex-col justify-between">
      <div className="">
        <h2 className="text-xl font-semibold text-amber-600">Categories</h2>
        <CategoriesList />
      </div>
      <AddCategory />
    </div>
  );
};

export default CategoriesMenu;
