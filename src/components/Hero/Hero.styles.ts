import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: ${({ theme }) => theme.colors.text};
`;

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  padding-left: 8vw;
  padding-right: 8vw;
`;

export const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.div`
  padding-left: 1rem;
  font-size: 2vw;
`;

export const HeroImg = styled.img`
  height: 3vw;
  width: auto;
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
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4vw;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-style: italic;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  text-align: center;
  font-weight: 600;
`;
