import styled from 'styled-components';

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
  width: auto;
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

export const Highlight = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: inline;
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
