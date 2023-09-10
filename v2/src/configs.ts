import TitleImage from './resources/Title.png';
// import LocationMapImage from './resources/LocationMap.png';
import qrCodeBride from './resources/qrCodeBride.png';
import qrCodeGroom from './resources/qrCodeGroom.png';
import GalleryPhoto1 from './resources/Gallery_Photo_1.png';
import GalleryPhoto2 from './resources/Gallery_Photo_2.png';
import GalleryPhoto3 from './resources/Gallery_Photo_3.png';
import GalleryPhoto4 from './resources/Gallery_Photo_4.png';
import GalleryPhoto5 from './resources/Gallery_Photo_5.png';
import GalleryPhoto6 from './resources/Gallery_Photo_6.png';
import GalleryPhoto7 from './resources/Gallery_Photo_7.png';
import GalleryPhoto8 from './resources/Gallery_Photo_8.png';
import ThankYou from './resources/ThankYou.png';

const Configs: ConfigsType = {
  url: 'http://localhost:3000',
  groom: {
    name: 'Hoàng Luân',
    accountNumber: '108003534473',
    fatherName: 'Hoàng Văn Huân',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Phạm Thị Thoa',
    motherAccountNumber: '○○은행 ***-***-******',
    weddingDate: 'Ngày 23 . 9 . 2023, Vào lúc: 16 Giờ 00',
    weddingLocation: 'Phú An , Cao An, Cẩm Giàng, Hải Dương',
  },
  bride: {
    name: 'Thanh Hà',
    accountNumber: '19036446300011',
    fatherName: 'Nguyễn Văn Sông',
    fatherAccountNumber: '○○은행 ***-***-******',
    motherName: 'Phạm Thị Hằng',
    motherAccountNumber: '○○은행 ***-***-******',
    weddingDate: 'Ngày 23 . 9 . 2023, Vào lúc: 16 Giờ 00',
    weddingLocation: 'Địch Tràng , Đức Chính, Cẩm Giàng, Hải Dương',
  },
  titleImage: TitleImage,
  ThankYou: ThankYou,
//   locationMapImage: LocationMapImage,
  galleryImages: [
    GalleryPhoto1,
    GalleryPhoto2,
    GalleryPhoto3,
    GalleryPhoto4,
    GalleryPhoto5,
    GalleryPhoto6,
    GalleryPhoto7,
    GalleryPhoto8,
  ],
  qrCodeBride: qrCodeBride,
  qrCodeGroom: qrCodeGroom,
};

export type ConfigsType = {
  url: string;
  groom: Person;
  bride: Person;
  titleImage: string;
  ThankYou: string;
//   locationMapImage: string;
  galleryImages: string[];
  qrCodeBride: string,
  qrCodeGroom: string
}

type Person = {
  name: string;
  accountNumber: string;
  fatherName?: string;
  fatherAccountNumber?: string;
  motherName?: string;
  motherAccountNumber?: string;
  weddingDate: string,
  weddingLocation: string,
};

export default Configs;
