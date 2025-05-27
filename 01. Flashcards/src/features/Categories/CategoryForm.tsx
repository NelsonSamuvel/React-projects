import { useState, type FormEvent } from "react"
import Input from "../../components/ui/Input"

const CategoryForm = () => {

    const [formData,setFormData] = useState({
        name:"",
        description:"",
        color:"#3B82F6",
        flashcardCount:"0"
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(formData)
    }

  return (
    <div className="mt-4">
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label htmlFor="name" className="block">Category Name</label>
                <Input type="text" placeholder="Enter category name" value={formData.name} onChange={handleChange} name="name" id="name"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="description" className="block">Description (optional)</label>
                <Input type="text" placeholder="Enter category name" value={formData.description} onChange={handleChange} name="description" id="description"/>
            </div>
            <div className="space-y-2">
                <label htmlFor="color" className="block">Color</label>
                <div className="flex items-center gap-2 bg-slate-200 text-gray-900 rounded-md">
                <div className="w-20 h-12 rounded-full overflow-hidden">
                    <Input type="color" placeholder="Enter category name" value={formData.color} onChange={handleChange} name="color" id="color" className="w-full h-full  bg-transparent"/>
                </div>
                <p className="text-sm font-semibold">{formData.color}</p>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="flashcardCount" className="block">Flashcard Count</label>
                <Input type="number" placeholder="Enter Card Count" value={formData.flashcardCount} onChange={handleChange} name="flashcardCount" id="flashcardCount"/>
            </div>

            <button className="mt-2 bg-amber-600 py-2 px-4 rounded-md cursor-pointer hover:bg-amber-700 transition-all duration-300">Create</button>
        </form>
    </div>
  )
}

export default CategoryForm