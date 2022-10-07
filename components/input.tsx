export default function Input(props:{
  title:string;
  multiple?:boolean;
  placeholder?:string;
}) {
  const inputClass = 'rounded-[5px] border-solid border-[1px] border-black w-full bg-[#eee] font-[16px] p-3';
  return <div className='flex flex-col gap-4 lg:gap-2 xl:gap-4 font-work-sans'>
    <p className='leading-[25px] text-[20px]'>{props.title}</p>
    {props.multiple ? <textarea className={inputClass + ' h-[75px]'} placeholder={props.placeholder}></textarea> : <p><input placeholder={props.placeholder} className={inputClass + ' h-[38px]'}/></p>}
  </div>;
}
