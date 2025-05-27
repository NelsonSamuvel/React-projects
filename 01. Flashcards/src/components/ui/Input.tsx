interface InputProps{
    type:string,
    placeholder:string,
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    name?:string,
    id?:string,
    className?:string
}
const Input = ({type,placeholder,value,onChange,name,id,className}:InputProps) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} id={id} className={` rounded-md p-2 bg-slate-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600 ${className ? className : "w-full"}`}/>
  )
}

export default Input