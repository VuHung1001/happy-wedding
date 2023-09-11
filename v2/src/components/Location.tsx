import { useEffect, useRef } from 'react';
import { styled } from '@stitches/react';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '40px' : '60px',
  display: 'flex',
  flexDirection: isPortrait ? 'column' : 'row',
  height: '100%',
  gap: '30px'
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  marginBottom: '20px'
});
const Map = styled('a', {
  display: "block",
  width: "fit-content",
  fontSize:'0.8em',
  margin: isPortrait?'5px 0':'20px 0'
});

const Phone = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1em' : '2em',
  margin: 0,
  fontWeight: '500',
});

const Address = styled('div', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '1em' : '2em',
  margin: 0,
  fontWeight: '500',
  height: '20%'
});
const Iframe = styled('iframe', {
  height: isPortrait ? '100px' : '200px',
  width: '100%'
});


type LocationProps = {
  config: ConfigsType;
};
const Image = styled('img', {
  // width: isPortrait ? '100%' : '40%',
  display: 'block',
  margin: 'auto auto 0 auto',
  maxHeight: '100%',
  maxWidth: '100%',
  objectPosition: isPortrait ?'':'0 20%',
  opacity:'0.8'
});

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <Section ref={ref}>
      <Layout >
        <div className="hoho" style={{width: '100%', flexGrow: '1', height:'auto'}}>
          <Title>Đường tới nhà trai</Title>
            <Address>Địa chỉ: Phú An, Cao An, Cẩm Giàng, Hải Dương</Address>
            <Map className="map"  href="https://goo.gl/maps/3HWZRkaRJso1hT7WA" target="_blank" >Xem bản đồ</Map>
            <Phone>Phone: 0343151097 (Hoàng Luân)</Phone>
        </div>

        <div className="hoho" style={{width: '100%', flexGrow: '1',  height:'auto'}}>
          <Title>Đường tới nhà gái</Title>
            <Address>Địa chỉ: Địch Tràng, Đức Chính, Cẩm Giàng, Hải Dương</Address>
            <Map className="map" href="https://goo.gl/maps/3UJquxdgYXYH6jDJ7" target="_blank" >Xem bản đồ</Map>
            <Phone>Phone: 0336927950 (Thanh Hà)</Phone>
        </div>

      </Layout>

    </Section>
  );
};

export default Location;
