import Button from './button';
import Container from './container';

export default function Hero() {
  return <Container background>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-30 font-work-sans text-white pt-10 pb-4 md:pb-20 items-center'>
      <div className='flex flex-col	gap-3.75 order-2 md:order-1'>
        <p className='text-[16px] leading-[20px] font-bold tracking-[5px]'>WELCOME</p>
        <p className='font-crimson-text leading-[30px] lg:leading-[40px] xl:leading-[50px] font-bold xl:text-[45px] lg:text-[32px] text-[24px]'>Lorem ipsum dolor sit amet consectetur</p>
        <p className='text-[15px] leading-[18.75px] text-white/75'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
        <Button>Explore</Button>
      </div>
      <img className='h-auto max-w-full order-1 md:order-2' src='hero.svg'/>
    </div>
    </Container>;
}
