interface InputProps{
    type:string,
    placeholder:string,
    value:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    name?:string,
    id?:string,
    className?:string
    disabled?:boolean
}
const Input = ({type,placeholder,value,onChange,name,id,className,disabled}:InputProps) => {
  return (
    <input disabled={disabled} type={type} placeholder={placeholder} value={value} onChange={onChange} name={name} id={id} className={` rounded-md p-2 bg-slate-900 border border-slate-800  focus:outline-none focus:ring-2 focus:ring-amber-600 disabled:bg-slate-800/20 disabled:cursor-not-allowed ${className ? className : "w-full"}`}/>
  )
}

export default Input