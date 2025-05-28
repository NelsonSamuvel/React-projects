import {  useState, type FormEvent } from "react"
import Input from "../../components/ui/Input"
import { useFlashCardContext } from "../../context/FlashCardProvider";
import type { Category } from "../../types/types";


const QuestionForm = ({onSubmit}:{onSubmit:(category:Category)=>void}) => {

    const {categories,activeCategory} = useFlashCardContext()



    const [formData,setFormData] = useState({
        name:activeCategory?.name ?? "",
        cardCount:activeCategory?.flashcardCount.toString() ?? "0",
        question : "",
        answer : ""
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const newCategoryId = categories[categories.length-1].id + 1;
        // onSubmit({...formData,flashcardCount : parseInt(formData.flashcardCount) ,id:newCategoryId})
    }

  return (
    <div className="mt-4">



        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4 justify-between">
            <div className="flex-1">
                <label htmlFor="category" className="block">Category</label>
                <Input disabled={true}  type="text" placeholder="Enter category name" value={formData.name} onChange={handleChange} name="category" id="category"/>
            </div>
            <div className="flex-1">
                <label htmlFor="cardCount" className="block">Card Count</label>
                <Input type="number" placeholder="Enter category name" value={formData.cardCount} onChange={handleChange} name="cardCount" id="cardCount"/>
            </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="question" className="block">Question</label>
                <textarea className="rounded-md p-2 w-full bg-slate-900 border border-slate-800  focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-slate-800/20 disabled:cursor-not-allowed" rows={3} placeholder="Enter the question" value={formData.question} onChange={handleChange} name="question" id="question"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="answer" className="block">Answer</label>
                <textarea className="rounded-md p-2 w-full bg-slate-900 border border-slate-800  focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-slate-800/20 disabled:cursor-not-allowed" rows={5} placeholder="Enter the answer for the question" value={formData.question} onChange={handleChange} name="answer" id="answer"/>
            </div>
            <button className="mt-2 bg-amber-600 py-2 px-4 rounded-md cursor-pointer hover:bg-amber-700 transition-all duration-300">Create</button>
        </form>
    </div>
  )
}

export default QuestionForm