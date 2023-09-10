import { styled } from '@stitches/react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  height: '100vh',
  background: '#DADADA',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  color: '#5D4037',
  textAlign: 'center',
  marginTop: '3.5%',
  animation: 'fadein 2.5s',
  position: 'relative',
  zIndex: 5,
});

const TitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '1.9rem' : '3.5em',
  margin: 0,
  fontWeight: '500',
  fontFamily: 'Alex',
});

const SubTitleLayout = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '',
  margin: '16px 0',
  fontWeight: '300',
});
const SubTitleLayout1 = styled('p', {
  width: '100%',
  fontSize: isPortrait ? '1.2em' : '2em',
  fontWeight: '300',
  margin: 0,
});

const ImageLayout = styled('div', {
  width: '100%',
  height: '100%',
  background: '#DADADA',
  textAlign: 'center',
  flexGrow: 1,
  display: 'flex',
});

const BlockInfo = styled('div', {
  display: isPortrait ? '' : 'flex',
  justifyContent: isPortrait ? '' : 'center',
  margin: isPortrait ? '' : 'center'
});

const Image = styled('img', {
  // width: isPortrait ? '100%' : '40%',
  display: 'block',
  margin: 'auto auto 0 auto',
  maxHeight: '100%',
  maxWidth: '100%',
});

type TitleProps = {
  config: ConfigsType;
};

const Title = ({ config }: TitleProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={80}
        gravity={0.03}
        colors={['#FFCDD2', '#F8BBD0', '#D1C4E9', 'yellow']}
        recycle={true}
        style={{ position: 'fixed' }}
      />
      <Section>
        <Layout className='haha'>
          <SubTitleLayout>WEDDING INVITATION</SubTitleLayout>
          <TitleLayout>
            {config.groom.name} &amp; {config.bride.name}
          </TitleLayout>
          <SubTitleLayout>Trân trọng kính mời</SubTitleLayout>
          {/* <BlockInfo>
            <SubTitleLayout className='zz'>
              <SubTitleLayout1>Nhà trai</SubTitleLayout1>
              <br />
              Tới dự bữa cơm thân mật vào: {config.groom.weddingDate}
              <br />
              Lễ vu quy được tổ chức vào: 12h Chủ Nhật, 24.09.2023
              <br />
              {config.groom.weddingLocation}
            </SubTitleLayout>
            <SubTitleLayout className='zz'>
              <SubTitleLayout1>Nhà gái</SubTitleLayout1>
              <br />
              Tới dự bữa cơm thân mật vào: {config.bride.weddingDate}
              <br />
              Lễ vu quy được tổ chức vào: 12h Chủ Nhật, 24.09.2023
              <br />
              {config.bride.weddingLocation}
            </SubTitleLayout>
          </BlockInfo> */}
        </Layout>
        <Image src={config.titleImage} alt="Wedding Invitation Title Picutre" className='hehe' />
        {/* <ImageLayout>
        </ImageLayout> */}
      </Section>
    </>
  );
};

export default Title;
