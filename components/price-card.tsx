import Button from './button';

export default function PriceCard(props:{
  plan:string;
  price:string;
  description?:string;
  items?:string[];
}) {
  const description = props.items || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam';
  const items = props.items || Array(5).fill('Lorem ipsum, dolor sit');
  return <div className='rounded-[5px] shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)] px-[30px] py-[46px]'>
    <div className='flex'>
      <div className='font-work-sans text-[15px] text-center'>
        <p className='leading-[125%]'>{props.plan}</p>
        <p className='flex justify-center items-center gap-2.25'>
          <span className='leading-[125%] font-bold text-[40px]'>{props.price}</span>
          <span className='text-[rgba(33,37,41,0.5)]'>/month</span>
        </p>
        <p className='w-[279px] lg:w-[230px] xl:w-[279px] h-[57px] my-[10px] text-[rgba(33,37,41,0.5)]'>{description}</p>
      </div>
    </div>
    <div className='flex flex-col mt-[52px] gap-[11px]'>
      {items.map((item, idx) => <div key={idx} className='flex gap-[11px]'>
        <img src='item.svg'></img>
        <p>{item}</p>
      </div>)}
    </div>
    <div className='text-center mt-[45px]'><Button inverse/></div>
  </div>;
}
