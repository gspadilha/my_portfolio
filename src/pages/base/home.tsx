import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiArrowDownCircle, FiMenu, FiArrowUpCircle } from 'react-icons/fi';

import Logo from 'components/commons/Logo';
import Menu from 'components/pages/Menu';

import {
  HomeContainer,
  HomeRepositorys,
  HomeSideBar,
  HomeController,
  HomeRepository,
  HomeRepositoryOrder,
  HomeRepositoryTitle,
  HomeRepositoryDescription,
  HomeControllerButton,
} from '@pageStyles/base/home.style';
import { AnimatePresence } from 'framer-motion';

interface IRepositorios {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  language: string;
}

const variants = {
  enter: () => {
    return {
      x: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: () => {
    return {
      zIndex: 0,
      x: 0,
      opacity: 0,
    };
  },
};

const Home: React.FC = () => {
  const [repositorios, setRepositorios] = useState<IRepositorios[]>([]);
  const [repositorioMostrado, setRepositorioMostrado] = useState(0);

  const buscarDadosRepositorio = async () => {
    const dados = await axios.get<IRepositorios[]>(
      'https://api.github.com/users/gspadilha/repos',
    );

    const repositoriosValidos = dados.data.filter(
      dado => dado.description?.charAt(0) === '#',
    );
    setRepositorios(repositoriosValidos);
  };

  useEffect(() => {
    buscarDadosRepositorio();
  }, []);

  const handleUpRepositorios = () => {
    setRepositorioMostrado(oldValue =>
      oldValue === repositorios.length - 1 ? oldValue : oldValue + 1,
    );
  };

  const handleDownRepositorios = () => {
    setRepositorioMostrado(oldValue => (oldValue === 0 ? 0 : oldValue - 1));
  };

  return (
    <>
      <HomeContainer>
        <HomeSideBar>
          <div>
            <Logo />
            <div>
              <strong>Guilherme Padilha</strong>
              <p>Bem-vindo</p>
            </div>
          </div>
          <Menu />
        </HomeSideBar>

        <HomeController>
          <HomeControllerButton
            onClick={handleDownRepositorios}
            disabled={repositorioMostrado === 0}
          >
            <FiArrowUpCircle color="white" size={24} />
          </HomeControllerButton>

          <HomeControllerButton>
            <FiMenu color="white" size={24} />
          </HomeControllerButton>

          <HomeControllerButton
            onClick={handleUpRepositorios}
            disabled={repositorioMostrado === repositorios.length - 1}
          >
            <FiArrowDownCircle color="white" size={24} />
          </HomeControllerButton>
        </HomeController>

        <HomeRepositorys>
          {repositorios
            .map((repositorio, index) => (
              <AnimatePresence key={index} initial={true}>
                <HomeRepository
                  imagemFundo={`https://dummyimage.com/600x400/000/fff.png&text=${repositorio.name}`}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 3000, damping: 300 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                >
                  <HomeRepositoryOrder>
                    {String(index + 1).padStart(2, '0')}
                  </HomeRepositoryOrder>
                  <HomeRepositoryTitle>{repositorio.name}</HomeRepositoryTitle>
                  <HomeRepositoryDescription>
                    {repositorio.description}
                  </HomeRepositoryDescription>
                </HomeRepository>
              </AnimatePresence>
            ))
            .filter((_, index) => index === repositorioMostrado)}
        </HomeRepositorys>
      </HomeContainer>
    </>
  );
};

export default Home;
