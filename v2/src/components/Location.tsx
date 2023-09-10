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
  padding: isPortrait ? '40px 20px 10px' : '180px',
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

type LocationProps = {
  config: ConfigsType;
};

const Location = ({ config }: LocationProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  return (
    <Section ref={ref}>
      <Layout>
        <div style={{width: '100%', flexGrow: '1'}}>
          <Title>Đường tới nhà trai</Title>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=20.951485, 106.252930&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>

        <div style={{width: '100%', flexGrow: '1'}}>
          <Title>Đường tới nhà gái</Title>
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe className="gmap_iframe" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=20.970402, 106.268546&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </div>
        </div>

      </Layout>
    </Section>
  );
};

export default Location;
