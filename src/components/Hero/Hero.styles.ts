import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 500px) {
    height: 50vh;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-left: 8vw;
  padding-right: 8vw;

  @media (max-width: 500px) {
    height: 20%;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  align-items: center;

  @media (max-width: 500px) {
    height: 100%;
  }
`;

export const Title = styled.div`
  padding-left: 1rem;
  font-size: 2vw;
`;

export const HeroImg = styled.img`
  height: 3vw;
  width: auto;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 500px) {
    height: 4vw;
  }
`;

export const Contato = styled.button`
  background: none;
  height: 3vw;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  border: solid 2px;
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.primary};
  font-size: 2vw;

  @media (max-width: 500px) {
    height: 5vw;
    font-size: 3vw;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 5vw;
  text-align: center;

  @media (max-width: 500px) {
    height: 60%;
    font-size: 7vw;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;

  @media (max-width: 500px) {
    font-size: 6vw;
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  text-align: center;
  font-weight: 600;

  @media (max-width: 500px) {
    height: 20%;
    font-size: 4.5vw;
  }
`;
