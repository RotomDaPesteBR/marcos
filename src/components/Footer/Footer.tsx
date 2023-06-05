import Link from 'next/link';
import {
  Container,
  Foot,
  FooterImg,
  FooterText,
  Info,
  Medias,
  MediasImg
} from './Footer.styles';

export default function Hero() {
  return (
    <Container>
      <Medias>
        <Link href="/">
          <MediasImg src="https://marcos-ruddy.vercel.app/whatsapp.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="https://marcos-ruddy.vercel.app/instagram.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="https://marcos-ruddy.vercel.app/linkedin.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="https://marcos-ruddy.vercel.app/youtube.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="https://marcos-ruddy.vercel.app/email.svg" alt="" draggable="false" />
        </Link>
      </Medias>
      <Info>
        info legais e etc
        <br />
        info legais e etc
        <br />
        info legais e etc
        <br />
        info legais e etc
      </Info>
      <Foot>
        <FooterImg src="Footer.svg" alt="" />
        <FooterText>2023 © DESENVOLVIDO POR ICARUS BRANDS</FooterText>
      </Foot>
    </Container>
  );
}
