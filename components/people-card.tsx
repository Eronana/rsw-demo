export default function PeopleCard(props:{
  image:string;
  name:string;
  title:string;
}) {
  return <div className='w-[300px] sm:w-[260px] sm:px-4 sm:py-2 md:w-[300px] lg:w-[225px] xl:w-[250px] px-8 py-4 lg:px-6 lg:py-3 xl:px-8 xl:py-4 rounded-[5px] shadow-[3px_4px_12px_1px_rgba(0,0,0,0.25)]'>
    <img src={props.image} className='max-w-none mx-auto'/>
    <p className='font-crimson-text font-bold text-[24px] mt-[19px]'>{props.name}</p>
    <p className='font-work-sans text-[15px] mt-[17px]'>{props.title}</p>
  </div>;
}
