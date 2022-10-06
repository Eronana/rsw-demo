import Card from '../components/card';
import Container from '../components/container';
import Content from '../components/content';
import PeopleCard from '../components/people-card';

export default function Home() {
  const partners = [
    'google',
    'microsoft',
    'airbnb',
    'facebook',
    'spotify',
  ];
  const team = [
    { name: 'Peg Legge', title: 'CEO' },
    { name: 'Richard Guerra', title: 'CTO' },
    { name: 'Alexandra Stolz', title: 'DESIGNER' },
    { name: 'Janet Bray', title: 'DEVELOPER' },
  ];
  return <>
    <Container background>
      <Card image='hero.svg' label='WELCOME' buttonText='Explore'/>
    </Container>
    <Container>
      <Content label='PARTNERS'>
        <div className='flex flex-col md:flex-row flex-wrap gap-[40px] md:gap-15 items-center'>
          {partners.map((p, i) => <img key={i} src={`partners/${p}.svg`}/>)}
        </div>
      </Content>
      <Card image='home-1.svg' inverse reverse/>
      <Card image='home-2.svg' inverse/>
      <Content label='TEAM' buttonText='View Team'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:flex gap-5 mx-auto'>
          {team.map((p, i) => <PeopleCard key={i} {...p} image={`team/${p.title}.svg`}/>)}
        </div>
      </Content>
    </Container>
  </>;
}
