import Button from './button';

export default function Card(props:{
  image:string;
  buttonText?:string;
  label?:string;
  title?:string;
  content?:string;
  inverse?:boolean;
  reverse?:boolean;
}) {
  const textColor = props.inverse ? 'text-black' : 'text-white';
  return <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-30 font-work-sans ${textColor} pt-10 pb-4 md:pb-20 items-center`}>
    <div className={`flex flex-col gap-3.75 order-2 ${props.reverse ? 'md:order-2' : 'md:order-1'}`}>
      { props.label && <p className='text-[16px] leading-[20px] font-bold tracking-[5px]'>{props.label}</p> }
      <p className='font-crimson-text leading-[30px] lg:leading-[40px] xl:leading-[50px] font-bold xl:text-[45px] lg:text-[32px] text-[24px]'>{ props.title || 'Lorem ipsum dolor sit amet consectetur' }</p>
      <p className={`text-[15px] leading-[18.75px] ${textColor}/75`}>{ props.content || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?'}</p>
      <Button inverse={props.inverse} text={props.buttonText}/>
    </div>
    <img className={`h-auto max-w-full order-1 ${props.reverse ? 'md:order-1' : 'md:order-2'}`} src={props.image}/>
  </div>;
}
