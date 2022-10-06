import { ReactNode } from 'react';

export default function Button({
  width = 170,
  inverse = false,
  text = 'Learn More'
}:{
  width?:number;
  inverse?:boolean;
  children?:ReactNode;
  text?:string;
}) {
  const className = `h-[48px] text-xl rounded-[5px] `
    + (inverse ? 'bg-black text-white' : 'bg-white text-black');
  return <button className = { className } style={{ width }}>
    { text }
  </button>
}
