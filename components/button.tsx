export default function Button({
  width = 170,
  inverse = false,
  text = 'Learn More'
}:{
  width?:number|string;
  inverse?:boolean;
  text?:string;
}) {
  const className = `h-[48px] text-xl rounded-[5px] `
    + (inverse ? 'bg-black text-white' : 'bg-white text-black');
  return <button className = { className } style={{ width }}>
    { text }
  </button>
}
