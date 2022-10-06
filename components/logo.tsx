export default function Logo() {
  return <div className='flex justify-between gap-4.5'>
    <img src='logo.svg' className='w-[45px] md:w-[70px]'/>
    <span className='font-work-sans font-medium md:text-[40px] text-[35px] text-white'>Start</span>
  </div>;
}
