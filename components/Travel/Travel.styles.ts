import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  perspective: 1000px;
`;

const Stage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

const House = styled.div`
  width: 100vw;
  height: 100vh;
  transform: translateZ(-490vw);
  transform-style: preserve-3d;
`;

const Wall = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(2555, 255, 255, 0.8);
`;

const WallLeft = styled(Wall)`
  width: 1000vw;
  background: #f8f8f8;
  transform: rotateY(90deg) translateZ(-500vw);
`;

const WallRight = styled(Wall)`
  width: 1000vw;
  background: #f8f8f8;
  transform: rotateY(90deg) translateZ(-400vw);
`;

const WallFront = styled(Wall)<{ distance: number }>`
  transform: ${(props) => `translateZ(${props.distance}vw)`};
`;

const WallContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const WallTitle = styled.h2`
  font-size: 5rem;
`;

export {
  Container,
  Stage,
  House,
  Wall,
  WallLeft,
  WallFront,
  WallRight,
  WallContent,
  WallTitle,
};
