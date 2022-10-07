import Button from '../components/button';
import Container from '../components/container';
import Content from '../components/content';
import Input from '../components/input';

export default function Concat() {
  return <Container>
    <Content title='Concats Us' disableButton>
      <div className='grid justify-between grid-cols-1 lg:grid-cols-2 gap-7.5'>
        <div className='flex flex-col gap-[16px] lg:gap-[4px] xl:gap-[16px] order-2 lg:order-1 w-full'>
          <Input title='Name' placeholder='Your name here'/>
          <Input title='Email' placeholder='Your email here'/>
          <Input title='Message' multiple placeholder='Your message here'/>
          <Button text='Submit' inverse width='100%'/>
        </div>
        <img src='map.svg' className='order-1 lg:order-2 w-full'/>
      </div>
    </Content>
  </Container>;
}
