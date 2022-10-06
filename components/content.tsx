import { ReactNode } from 'react';
import Button from './button';

export default function Content(props:{
  label:string;
  buttonText?:string;
  title?:string;
  content?:string;
  children?:ReactNode;
}) {
  return  <div className='flex flex-col gap-[55px] my-15'>
  <div className='w-[441px] justify-center mx-auto text-center'>
    <p className='text-primary font-work-sans text-[16px] leading-[20px] font-bold tracking-[5px]'>{props.label}</p>
    <p className='font-crimson-text font-bold text-[40px]'>{ props.title || 'Lorem Ipsum Dolor' }</p>
    <p className='font-work-sans text-[20px]'>{ props.content || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }</p>
  </div>
  {props.children}
  <div className='text-center'>
    <Button inverse text={props.buttonText}/>
  </div>
</div>;
}
