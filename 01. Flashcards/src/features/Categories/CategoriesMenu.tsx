import AddCategory from "./AddCategory";
import CategoriesList from "./CategoriesList";

export interface CategoriesMenuProps {
  appLoading: boolean;
}

const CategoriesMenu = () => {
  return (
    <div className="border border-slate-900 w-64  mt-2 flex flex-col justify-between relative scrollbar-custom overflow-y-auto">
      <div className="flex justify-between items-center py-3 px-4">
        <h2 className="text-xl font-semibold text-amber-600 ">Categories</h2>
        <AddCategory />
      </div>
        <CategoriesList />
 
    </div>
  );
};

export default CategoriesMenu;
