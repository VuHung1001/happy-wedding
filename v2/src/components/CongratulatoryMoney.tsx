import { styled } from '@stitches/react';
import { Button, Divider, message, Modal } from 'antd';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { ConfigsType } from '../configs';
import HongBao from './HongBao';

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

const Section = styled('section', {
  background: '#EFEBE9',
  overflow: 'hidden',
  position: 'relative',
  backGround: '#f3f7fa'
});

const Layout = styled('div', {
  width: '100%',
  padding: isPortrait ? '10% 0% 10% 5%' : '2% 0% 2% 4%',
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
  fontSize: isPortrait ? '2em' : '2em',
  margin: '24px 0',
  fontWeight: '300',
  lineHeight: 1.8,
  fontFamily: 'Alex'
});

const GridLayout = styled('div', {
  display: isPortrait ?'grid':'flex',
  gridTemplateColumns: isPortrait ?'50% 50%':'',
});

const Description = styled('p', {
  fontSize: '1em',
  lineHeight: 1.75,
  opacity: 0.65,
  marginTop: '8px',
});

type CongratulatoryMoneyProps = {
  config: ConfigsType;
};

const CongratulatoryMoney = ({ config }: CongratulatoryMoneyProps) => {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Section>
      <Layout>
        <Title>Gửi lời chúc mừng của bạn</Title>
      </Layout>
      <GridLayout>
        <HongBao title="Chú rể" subTitle="Mừng cưới" onClick={() => setGroomVisible(true)} />
        <HongBao title="Cô dâu" subTitle="Mừng cưới" onClick={() => setBrideVisible(true)} />
      </GridLayout>
      <Modal
        title={<b>Số tài khoản chú rể</b>}
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Bấm vào số tài khoản để sao chép</Description>]}
      >
        {/* <div>
          <b>부) {config.groom.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.groom.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모) {config.groom.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.groom.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.groom.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div> */}
        <div>
          <b>Chú rể: {config.groom.name}</b>
          <div>Ngân hàng: Viettinbank</div>
          <CopyToClipboard text={config.groom.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
            Số tài khoản: {config.groom.accountNumber}
            </Button>
          </CopyToClipboard>
          <br/>
          <img
            style={{ width: isPortrait ? '100%' : '60%' }}
            src={config.qrCodeGroom}
            alt="Wedding Invitation Title Picutre"
          />
        </div>
      </Modal>
      <Modal
        title={<b>Số tài khoản cô dâu</b>}
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        footer={[<Description>Bấm vào số tài khoản để sao chép</Description>]}
      >
        {/* <div>
          <b>부) {config.bride.fatherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.fatherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.bride.fatherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div>
        <div style={{ marginTop: 24, marginBottom: 24 }}>
          <b>모) {config.bride.motherName}</b>
          <Divider type="vertical" />
          <CopyToClipboard text={config.bride.motherAccountNumber || ''}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('계좌번호가 복사되었습니다.')}
            >
              {config.bride.motherAccountNumber || ''}
            </Button>
          </CopyToClipboard>
        </div> */}
        <div>
          <b>Cô dâu {config.bride.name}</b>
          <div>Ngân hàng: Techcombank</div>
          <CopyToClipboard text={config.bride.accountNumber}>
            <Button
              type="text"
              style={{ padding: 0, margin: 0 }}
              onClick={() => message.success('Số tài khoản đã được sao chép.')}
            >
              Số tài khoản: {config.bride.accountNumber}
            </Button>
          </CopyToClipboard>
          <br/>
          <img
            style={{ width: isPortrait ? '100%' : '60%' }}
            src={config.qrCodeBride}
            alt="Wedding Invitation Title Picutre"
          />
        </div>
      </Modal>
      <Layout>
        <SubTitle>Cảm ơn bạn vì những lời chúc tốt đẹp.</SubTitle>
      </Layout>
    </Section>
  );
};

export default CongratulatoryMoney;
