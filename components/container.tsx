import { ReactNode } from 'react';

export default function Container(props:{
  background?:boolean;
  children?:ReactNode
}) {
  const container = <div className='gap-10 container mx-auto'>
    <div className='max-w-[calc(100%-30px)] lg:max-w-[calc(100%-60px)] mx-auto'>
      {props.children}
    </div>
  </div>;
  return props.background ? <div className={'bg-primary'}>{container}</div> : container;
}
