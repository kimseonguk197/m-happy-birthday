import React from 'react';
import styled, { keyframes } from 'styled-components';

const rainbow = keyframes`
  0% {
    color: orange;
  }
  10% {
     color: purple;
  }
  20% {
     color: red;
  }
  30% {
     color: CadetBlue
    ;
  40% {
     color: yellow;
  }
  50% {
     color: coral;
  }
  60% {
     color: green;
  }
  70% {
     color: cyan;
  }
  80% {
     color: DeepPink;
  }
  90% {
     color: DodgerBlue;
  }
  100% {
     color: orange;
  }
 `;

const Happy = styled.div`
  color: transparent;
  background-image: linear-gradient(
    to left,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red
  );
  -webkit-background-clip: text;
  animation: ${rainbow} 1s infinite;
`;

function Card({ name }: { name?: string }) {
  return (
    <div className='pb-12 flex justify-center font-bold text-7xl'>
      <Happy>HAPPY {name} BIRTHDAY</Happy>
    </div>
  );
}

export default Card;