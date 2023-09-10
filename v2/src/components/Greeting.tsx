import { useRef } from 'react';
import { styled } from '@stitches/react';
import useOnScreen from '../hooks/useOnScreen';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '30% 0% 15% 5%' : '5% 0% 5% 10%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const SubTitle = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
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
        <Title>Chúng tôi sắp kết hôn</Title>
        <SubTitle>
          Sinh vào mùa Xuân: {config.bride.name}
          <br />
          Sinh vào mùa Thu: {config.groom.name}
          <br />
          <br />
          Hai người có sở thích và giá trị khác nhau
          <br />
          Chúng ta trở nên giống nhau nhờ tình yêu
          <br />
          Chúng ta sắp bắt đầu một cuộc hành trình mang tên cuộc sống cùng nhau.
          <br />
          <br />
          Với sự khuyến khích và phước lành ấm áp
          <br />
          Tôi hy vọng bạn thích sự khởi đầu mạnh mẽ này.
          <br />
          <br />
          <div style={{
            display: 'flex',
            justifyContent: "space-around"
          }}>
            <div>
              <div>Nhà trai</div>
              <div>Ông: {config.groom.fatherName}</div>
              <div>Bà: {config.groom.motherName}</div>
            </div>
            <div>
              <div>Nhà Gái</div>
              <div>Ông: {config.bride.fatherName}</div>
              <div>Bà: {config.bride.motherName}</div>
            </div>
          </div>
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
