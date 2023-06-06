import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
`;

export const Medias = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MediasImg = styled.img`
  height: 5vw;
  width: 5vw;
  margin: 1.25vw;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
`;

export const Foot = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FooterText = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: relative;
  font-size: 2vw;
  bottom: 3.5vw;
`;

export const FooterImg = styled.img`
  height: auto;
  width: 70vw;
  position: absolute;
  z-index: -1;
  bottom: 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
