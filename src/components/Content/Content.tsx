import {
  Carousel,
  CarouselButton,
  CarouselButtonImg,
  CarouselContainer,
  CarouselContent,
  CarouselImage,
  CarouselItem,
  CarouselName,
  CarouselNameSubtext,
  CarouselNameText,
  CarouselText,
  CarouselTitle,
  Container,
  Dica,
  EuSei,
  Galo,
  GaloContainer,
  Highlight,
  Lighthouse,
  LighthouseContainer,
  MarcosContainer,
  MarcosDescription,
  MarcosImg,
  MarcosLeft,
  MarcosRight,
  MarcosTitle,
  Pamonha,
  PamonhaContainer,
  PamonhaImg,
  PamonhaTitle,
  QuotationMarks,
  SemiBold,
  Victor,
  VictorBackground,
  VictorContainer,
  VictorDescription,
  VictorImageContainer,
  VictorImg,
  VictorLeft,
  VictorRight,
  VictorSubtitle,
  Video,
  VideoContainer,
  VideoEffect,
  Vitorioso,
  VitoriosoButton
} from './Content.styles';

export default function Hero() {
  return (
    <Container>
      <Pamonha>
        <PamonhaContainer>
          <PamonhaTitle>PANACA</PamonhaTitle>
          <PamonhaImg src="/panaca.png" alt="" draggable="false" />
        </PamonhaContainer>
        <PamonhaContainer>
          <PamonhaTitle>PANONHA</PamonhaTitle>
          <PamonhaImg src="/panonha.png" alt="" draggable="false" />
        </PamonhaContainer>
      </Pamonha>
      <LighthouseContainer>
        <Lighthouse src="/lighthouse.svg" />
      </LighthouseContainer>
      <EuSei>
        <div>
          EU SEI QUE VOCÊ QUER
          <br />
          SER <Highlight>ESSE AQUI</Highlight>:
        </div>
      </EuSei>
      <Victor>
        <VictorLeft>
          <VictorContainer>
            <VictorImageContainer>
              <VictorImg src="/victor.png" alt="" draggable="false" />
              <VictorBackground />
            </VictorImageContainer>
            <VictorSubtitle>VICTOR VITORIOSO</VictorSubtitle>
          </VictorContainer>
        </VictorLeft>
        <VictorRight>
          <VictorDescription>descrição do victor</VictorDescription>
        </VictorRight>
      </Victor>
      <Dica>
        A primeira dica que eu posso te dar
        <br />é que quem chegou lá
        <Highlight>
          começou
          <br /> assistindo a esse vídeo
        </Highlight>
        :
      </Dica>
      <VideoContainer>
        <Video
          src="https://www.youtube.com/embed/"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <VideoEffect src="/video.svg" alt="" draggable="false" />
      </VideoContainer>
      <Vitorioso>
        <VitoriosoButton type="button">
          QUERO SER O VICTOR VITORIOSO
        </VitoriosoButton>
      </Vitorioso>
      <MarcosContainer>
        <MarcosLeft>
          <MarcosImg src="/marcos.png" alt="" draggable="false" />
        </MarcosLeft>
        <MarcosRight>
          <MarcosTitle>
            Afinal <SemiBold>quem</SemiBold> é<br />
            <Highlight>
              <SemiBold>Marcos Ferreira</SemiBold>
            </Highlight>
            ?
          </MarcosTitle>
          <MarcosDescription>Descrição do Marcos</MarcosDescription>
        </MarcosRight>
      </MarcosContainer>
      <GaloContainer>
        <Galo src="/galo.svg" alt="" draggable="false" />
      </GaloContainer>
      <CarouselContainer>
        <CarouselTitle>O que estão dizendo sobre mim</CarouselTitle>
        <Carousel>
          <CarouselButton>
            <CarouselButtonImg src="/left.svg" alt="" draggable="false" />
          </CarouselButton>
          <CarouselItem>
            <CarouselImage src="/miss.png" alt="" draggable="false" />
            <CarouselContent>
              <QuotationMarks
                src="/quotationmarks.svg"
                alt=""
                draggable="false"
              />
              <CarouselText>
                Conheci o Marcos por indicação de uma
                <br />
                amiga. Meu principal desafio na comunicação
                <br />
                era ter muito medo do julgamento, medo de
                <br />
                errar em público e por conta disso sempre me
                <br />
                retraía perante as câmeras e na hora de falar.
                <br />
                E a mentoria em Competência Comunicativa
                <br />
                do Marcos era exatamente o que eu estava
                <br />
                buscando e precisando nomomento.
                <br />
                Os benefícios são claros!
              </CarouselText>
              <CarouselName>
                <CarouselNameText>
                  <Highlight>JÉSSICA CAROLINE</Highlight>
                  <br />
                  <CarouselNameSubtext>
                    MISS BRASIL NUESTRA LATINA
                  </CarouselNameSubtext>
                </CarouselNameText>
              </CarouselName>
            </CarouselContent>
          </CarouselItem>
          <CarouselButton>
            <CarouselButtonImg src="/right.svg" alt="" draggable="false" />
          </CarouselButton>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
