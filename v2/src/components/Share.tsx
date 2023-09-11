import { styled } from '@stitches/react';
import { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { MessageFilled, LinkOutlined } from '@ant-design/icons';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';

declare global {
  interface Window {
    Kakao: any;
  }
}

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#faefeb',
  overflow: 'hidden',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 10% 0%' : '5% 0% 5% 0%',
});

const Title = styled('p', {
  color: '#795548',
  width: '100%',
  fontSize: isPortrait ? '2.5em' : '3.5em',
  margin: 0,
  fontWeight: '500',
});

const ButtonGroup = styled('div', {
  width: '100%',
  textAlign: 'center',
  paddingBottom: isPortrait ? '10%' : '5%',
});

const KakaoTalkShareButton = styled(Button, {
  background: '#fee500',
  borderColor: '#fee500',
  color: '#181600',
  '&:hover': {
    backgroundColor: '#fcf07e !important',
    borderColor: '#fcf07e !important',
    color: '#17160b !important',
  },
  '&:focus': {
    backgroundColor: '#fcf07e !important',
    borderColor: '#fcf07e !important',
    color: '#17160b !important',
  },
});

const LinkShareButton = styled(Button, {
  background: '#53acee',
  borderColor: '#53acee',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
  '&:focus': {
    backgroundColor: '#9fcbed !important',
    borderColor: '#9fcbed !important',
    color: '#ffffff !important',
  },
});

type ShareProps = {
  config: ConfigsType;
};

const Share = ({ config }: ShareProps) => {
  
  return (
    <Section>
       <img
          style={{ width: isPortrait ? '100%' : '60%',display:'block', padding:'0 0 20px 0' }}
          src={config.ThankYou}
          alt="Wedding Invitation Title Picutre"
        />
    </Section>
  );
};

export default Share;
