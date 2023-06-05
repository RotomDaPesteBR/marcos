import {
  Bottom,
  Container,
  Contato,
  Content,
  Header,
  HeroImg,
  Logo,
  Subtitle
} from './Hero.styles';

export default function Hero() {
  return (
    <Container>
      <Header>
        <Logo>
          <HeroImg src="/marcos.svg" alt="" draggable="false" />
        </Logo>
        <Contato>Contato</Contato>
      </Header>
      <Content>
        <strong>
          Comunicação para
          <br />
          panacas e pamonhas
        </strong>
        <Subtitle>Por Marcos Ferreira</Subtitle>
      </Content>
      <Bottom>QUAL DESSES É VOCÊ?</Bottom>
    </Container>
  );
}
