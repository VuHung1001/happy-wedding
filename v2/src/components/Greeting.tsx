import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';
import thiepNhaTrai from '../resources/thiep-nha-trai.jpg'
import n from '../resources/thiep-nha-gai.jpg'

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  padding: isPortrait ? '20px 20px' : '60px 40px 60px',
  background: '#f1f6df',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5rem',
  margin: 0,
  fontWeight: '500',
  textAlign: 'center',
  fontFamily: 'Alex'
});

const Thiep = styled('div', {
  fontSize: '2rem',
  fontFamily: 'Alex',
  textAlign: 'center'
});


type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: onScreen ? '#EFEBE9' : '#DADADA',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Sự kiện cưới</Title>
        <div className={`oo ${isPortrait ? 'isPortrait' : ''}`}>
          <div>
          <Thiep>Hoàng Luân</Thiep>
            <img src={thiepNhaTrai} alt="Wedding Invitation Title Picutre" />

          </div>
          <div>
          <Thiep>Thanh Hà</Thiep>
            <img src={n} alt="Wedding Invitation Title Picutre" />

          </div>
        </div>
      </Layout>
    </section>
  );
};

export default Greeting;
