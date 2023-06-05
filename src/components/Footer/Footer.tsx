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
          <MediasImg src="/whatsapp.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="/instagram.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="/linkedin.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="/youtube.svg" alt="" draggable="false" />
        </Link>
        <Link href="/">
          <MediasImg src="/email.svg" alt="" draggable="false" />
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
