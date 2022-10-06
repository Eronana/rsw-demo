import { ReactNode } from 'react';

export default function Button({
  width = 170,
  inverse = false,
  children,
}:{
  width?:number;
  inverse?:boolean;
  children?:ReactNode
}) {
  const className = `w-[${width}px] h-[48px] text-xl rounded-[5px] `
    + (inverse ? 'bg-black text-white' : 'bg-white text-black');
  return <button className = { className }>
    { children }
  </button>
}
