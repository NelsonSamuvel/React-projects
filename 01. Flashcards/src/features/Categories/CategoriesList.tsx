const categories = [
  { id: 1, name: "Mathematics", qns: 20 },
  { id: 2, name: "Computer Science", qns: 20 },
  { id: 3, name: "Artificial Intelligence", qns: 20 },
  { id: 4, name: "Machine Learning", qns: 20 },
];

const CategoriesList = () => {
  return (
    <ul className="mt-4 space-y-4">
      {categories.map((category) => (
        <li
          key={category.id}
          className="flex justify-between px-4 py-2 border border-slate-700 rounded-md cursor-pointer hover:bg-gray-900 transition duration-150"
        >
          <p>{category.name}</p>
          <p>{category.qns}</p>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
