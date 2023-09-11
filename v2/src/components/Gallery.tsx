import { useRef } from 'react';
import { styled } from '@stitches/react';
import { Col, Image, Row } from 'antd';
import useOnScreen from '../hooks/useOnScreen';

import { useWindowSize } from 'react-use';
import { ConfigsType } from '../configs';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 0%' : '1% 0%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
  textAlign: 'center',
  fontFamily: 'Alex'
});

type GalleryProps = {
  config: ConfigsType;
};

const Gallery = ({ config }: GalleryProps) => {
  const { width } = useWindowSize();

  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, '-125px');

  return (
    <section
      ref={ref}
      style={{
        height: '100vh',
        background: '#EFEBE9',
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 1s ease-in',
      }}
    >
      <Layout>
        <Title>Our beautiful memories</Title>
      </Layout>
      <Row gutter={[16, 16]}>
        {config.galleryImages.map((image, index) => (
          <Col key={index} span={isPortrait ? 12 : 6}>
            <Image width={isPortrait ? width / 2 - 10 : width / 4 - 10} src={image} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Gallery;
