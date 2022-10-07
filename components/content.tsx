import { ReactNode } from 'react';
import Button from './button';

export default function Content(props:{
  label?:string;
  buttonText?:string;
  title?:string;
  content?:string;
  children?:ReactNode;
  disableButton?:boolean;
}) {
  return <div className='flex flex-col gap-[55px] mt-8.75 mb-30'>
    <div className='w-[441px] justify-center mx-auto text-center'>
      {props.label && <p className='text-primary font-work-sans text-[16px] leading-[20px] font-bold tracking-[5px]'>{props.label}</p>}
      <p className='font-crimson-text font-bold text-[40px]'>{ props.title || 'Lorem Ipsum Dolor' }</p>
      <p className='font-work-sans text-[20px]'>{ props.content || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }</p>
    </div>
    {props.children}
    {props.disableButton || <div className='text-center'>
      <Button inverse text={props.buttonText}/>
    </div>}
  </div>;
}
