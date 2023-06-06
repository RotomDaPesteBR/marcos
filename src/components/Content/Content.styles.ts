import styled from 'styled-components';

export const Highlight = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
`;

export const SemiBold = styled.div`
  font-weight: 600;
  display: inline;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
`;

export const Pamonha = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PamonhaContainer = styled.div`
  width: 20vw;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.text};
  margin: 2.5vw;
`;

export const PamonhaTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.5vw;
  padding: 1vw;
  font-weight: 500;
`;

export const PamonhaImg = styled.img`
  height: 20vw;
  width: auto;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const EuSei = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 3vw;
  padding: 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  margin-top: 5vw;
`;

export const LighthouseContainer = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
`;

export const Lighthouse = styled.img`
  width: 60vw;
  height: auto;
  position: absolute;
  right: 0;
  top: -15.5vw;
  z-index: -1;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Victor = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const VictorLeft = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const VictorRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const VictorContainer = styled.div`
  width: auto;
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VictorSubtitle = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25vw;
  padding: 1vw;
  font-weight: 500;
`;

export const VictorImageContainer = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const VictorImg = styled.img`
  height: 30vw;
  width: auto;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const VictorBackground = styled.div`
  height: 25vw;
  width: 20vw;
  z-index: -1;
  position: absolute;
  border: 2px solid;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.text};
  bottom: 0;
`;

export const VictorDescription = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5vw;
  padding: 1vw;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  width: 35vw;
  text-align: center;
`;

export const Dica = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: 3vw;
  padding: 1vw;
  display: inline;
  text-align: center;
  font-weight: 600;
  margin-top: 5vw;
`;

export const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
`;

export const Video = styled.iframe`
  width: 55vw;
  height: 30.85vw;
  border-radius: 15px;
  background-color: #000;
  border: none;
`;

export const VideoEffect = styled.img`
  width: 80vw;
  height: 40vw;
  position: absolute;
  z-index: -1;
`;

export const Vitorioso = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
`;

export const VitoriosoButton = styled.button`
  width: 50vw;
  height: 5vw;
  background-color: #1a52d3;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2vw;
  padding: 1vw;
  border: none;
  border-radius: 50px;
  font-weight: 700;
`;

export const MarcosContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  margin-top: 15vw;
`;

export const MarcosLeft = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const MarcosRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  flex-direction: column;
`;

export const MarcosImg = styled.img`
  width: auto;
  height: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MarcosTitle = styled.div`
  display: inline;
  margin-top: 9vw;
  font-size: 3vw;
  margin-bottom: 6vw;
`;

export const MarcosDescription = styled.div`
  display: inline;
  font-size: 1.5vw;
`;

export const GaloContainer = styled.div`
  width: 100%;
  height: 0px;
  position: relative;
`;

export const Galo = styled.img`
  width: 20vw;
  height: auto;
  position: absolute;
  left: 0;
  top: -25vw;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #00000080;
  border: none;
  border-radius: 5vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CarouselTitle = styled.div`
  display: inline;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 3vw;
  font-weight: 700;
  height: 10vw;
`;

export const Carousel = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10vw;
`;

export const CarouselLeftButton = styled.div`
  display: flex;
  height: auto;
  justify-content: end;
  align-items: center;
  width: 30vw;
`;

export const CarouselRightButton = styled.div`
  display: flex;
  height: auto;
  justify-content: start;
  align-items: center;
  width: 30vw;
`;

export const CarouselButton = styled.button`
  background: none;
  border: none;
  padding: 4vw;
`;

export const CarouselButtonImg = styled.img`
  height: 5vw;
  width: auto;
`;

export const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const CarouselImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 20vw;
  width: auto;
  position: relative;
  right: -0.75vw;
`;

export const CarouselContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid;
  border-color: white;
  border-top-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 1.25vw;
  position: relative;
  left: -0.75vw;
  height: 22.5vw;
  width: 55vw;
`;

export const QuotationMarks = styled.img`
  z-index: 1;
  height: 2vw;
  top: -1vw;
  left: 1vw;
  width: auto;
  position: absolute;
`;

export const CarouselText = styled.div`
  display: inline;
  padding: 1vw;
  font-size: 1.25vw;
  line-height: 1.8vw;
  white-space: nowrap;
`;

export const CarouselName = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  padding-right: 1.25vw;
`;

export const CarouselNameText = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1vw;
  line-height: 0.8vw;
`;

export const CarouselNameSubtext = styled.div`
  display: inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.645vw;
`;
