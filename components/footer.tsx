import Container from './container';

export default function Footer() {
  const icons = [
    'facebook',
    'instagram',
    'twitter',
    'pinterest',
    'tiktok',
    'whatsapp',
    'youtube',
  ];
  return <Container background>
    <div className='flex flex-col md:flex-row gap-5 md:justify-between justify-center items-center h-[125px]'>
      <div className='flex gap-5'>{icons.map((name, idx) => <img key={idx} src={`icons/${name}.svg`} className='cursor-pointer'/>)}</div>
      <span className='text-white font-work-sans text-xl'>© Start, 2022. All rights reserved.</span>
    </div>
  </Container>;
}
