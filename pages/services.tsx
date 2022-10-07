import Container from '../components/container';
import Content from '../components/content';
import PriceCard from '../components/price-card';

export default function Services() {
  const plans = [
    { plan: 'Basic', price: '$100' },
    { plan: 'Plus', price: '$250' },
    { plan: 'Pro', price: '$400' },
  ];
  return <Container>
    <Content label='PLANS' title='Our Services' disableButton>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 xl:gap-20 mx-auto'>
        {plans.map((p, i) => <PriceCard key={i} {...p}/>)}
      </div>
    </Content>
  </Container>;
}
