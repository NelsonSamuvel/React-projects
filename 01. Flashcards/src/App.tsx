import { useState } from "react";
import Header from "./components/Header";
import CategoriesMenu from "./features/Categories/CategoriesMenu";
import { Loader } from "lucide-react";
import FlashCardProvider from "./context/FlashCardProvider";
import FlashCardWindow from "./features/FlashCard/FlashCardWindow";

function App() {

  const [appLoading,setAppLoading] = useState(false);

  const handleLoading = (isLoading:boolean)=>{
    setAppLoading(isLoading)
  }

  return (
    <FlashCardProvider handleLoading={handleLoading} appLoading={appLoading}>
    {appLoading && <div className="fixed inset-0 bg-slate-950 bg-opacity-50 flex items-center justify-center z-50">
      <Loader/>
    </div>}

    <div className="grid grid-cols-[auto_1fr]  grid-rows-[auto_1fr] max-h-[90vh]  h-screen max-w-screen-xl mx-auto">
      <Header />
      <CategoriesMenu/>
      <FlashCardWindow />
    </div>
    </FlashCardProvider>
  );
}

export default App;
