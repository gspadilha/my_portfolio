import { motion } from 'framer-motion';
import styled from 'styled-components';

interface IHomeRepositoryProps {
  imagemFundo: string;
}

interface IHomeControllerButtonProps {
  disabled?: boolean;
}

export const HomeContainer = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: linear-gradient(
    225deg,
    rgba(0, 0, 0, 1) 13%,
    rgba(172, 172, 172, 1) 100%
  );
`;

export const HomeSideBar = styled.nav`
  z-index: 1;

  width: 20%;
  height: 100%;

  background: url('/images/background.jpeg') no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    svg {
      padding-top: 1rem;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      strong {
        text-align: center;
        font-size: 3.5rem;
        color: #ccc;
        padding-top: 2rem;
      }

      p {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 1rem;
        color: #ccc;
        padding-top: 2rem;
      }
    }
  }
`;

export const HomeController = styled.section`
  z-index: 10;
  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeControllerButton = styled.button<IHomeControllerButtonProps>`
  font-size: 0;
  border: 0;
  padding: 0.25rem;

  margin: 1px;

  transition: background 0.2s;
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'black')};

  &:hover {
    background-color: ${({ disabled }) => (disabled ? 'gray' : 'lightgray')};
  }

  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  &:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const HomeRepositorys = styled.section`
  width: 80%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeRepository = styled(motion.div)<IHomeRepositoryProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  min-width: 95%;
  width: 95%;
  height: 95%;
  box-shadow: 0 0 60px rgba(0, 0, 0, 1);

  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;

  /*transform: translateX(-5%);*/

  background: url('${({ imagemFundo }) => imagemFundo}') no-repeat;
  background-size: cover;

  //transition: transform 0.2s;

  &:hover {
    //transform: scale(1.05);
    //transition: transform 0.2s;
  }
`;

export const HomeRepositoryOrder = styled.span`
  text-align: center;
  position: absolute;
  font-size: 5rem;
  font-weight: bold;
  font-style: italic;

  left: 0;
  bottom: 0;

  margin: 0.25rem;

  background-color: black;
  color: white;
  border-radius: 5px;
`;

export const HomeRepositoryTitle = styled.strong`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: 10rem;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.light.fontColor};
  background-color: rgba(2, 3, 4, 0.5);

  padding: 0 1rem;
  padding-top: 0.9rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeRepositoryDescription = styled.span`
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.light.fontColor};
`;
