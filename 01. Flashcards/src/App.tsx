import Header from "./components/Header";
import CategoriesMenu from "./features/Categories/CategoriesMenu";
import FlipCardWindow from "./features/FlipCard/FlipCardWindow";

function App() {
  return (
    <div className="grid grid-cols-[auto_1fr]  grid-rows-[auto_1fr] max-h-[90vh] h-screen max-w-screen-xl mx-auto">
      <Header />
      <CategoriesMenu />
      <FlipCardWindow />
    </div>
  );
}

export default App;
