import Container from '../components/container';
import Content from '../components/content';

export default function Portfolio() {
  const works = 8;
  return <Container>
    <Content label='WORKS' title='Portfolio' buttonText='View Team'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto'>
        {Array(works).fill(0).map((_, i) => <img key={i} src={`works/${i}.svg`}/>)}
      </div>
    </Content>
  </Container>;
}
