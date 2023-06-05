import {
  Container,
  Dica,
  EuSei,
  Highlight,
  Lighthouse,
  LighthouseContainer,
  Pamonha,
  PamonhaContainer,
  PamonhaImg,
  PamonhaTitle,
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
        <br />é que quem chegou lá{' '}
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
      <div>
        <img src="" alt="" draggable="false" />
        <div>
          <div>Afinal quem é Marcos Ferreira?</div>
          <div>Descrição do Marcos</div>
        </div>
      </div>
      <div>
        <div>O que estão dizendo sobre mim</div>
        <div>
          <div>
            Conheci o Marcos por indicação de uma amiga. Meu principal desafio
            na comunicação era ter muito medo do julgamento, medo de errarem
            público e por conta disso sempre me retraía perante as câmerase na
            hora de falar. E a mentoria em Competência Comunicativa do Marcos
            era exatamente o que eu estava buscando e precisando nomomento. Os
            benefícios são claros!
          </div>
        </div>
      </div>
    </Container>
  );
}
