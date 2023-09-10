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
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '20% 0% 10% 5%' : '5% 0% 5% 10%',
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
      <Layout>
        <Title>Chia sẻ lời mời đám cưới của bạn</Title>
      </Layout>
      <ButtonGroup>
        <CopyToClipboard text={config.url}>
          <LinkShareButton
            style={{ margin: 8 }}
            icon={<LinkOutlined />}
            size="large"
            onClick={() => message.success('Liên kết lời mời đám cưới đã được sao chép.')}
          >
            Chia sẻ với liên kết
          </LinkShareButton>
        </CopyToClipboard>
      </ButtonGroup>
    </Section>
  );
};

export default Share;
