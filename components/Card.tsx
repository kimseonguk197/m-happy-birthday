import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';
Image;
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

const Span = styled.span<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize};
`;

function Card({ name, message }: { name?: string; message?: string }) {
  return (
    <div className='py-14 flex flex-col justify-center font-bold text-7xl pointer-events-none'>
      <Happy>
        <span className='text-5xl'>H</span>
        <span className='text-5xl'>A</span>
        <span className='text-5xl'>P</span>
        <span className='text-5xl'>P</span>
        <span className='text-5xl'>Y</span>
        <br></br>
        <span className='text-[6rem]'>{name}</span>
        <br></br>
        <span className='text-4xl'>B</span>
        <span className='text-4xl'>I</span>
        <span className='text-4xl'>R</span>
        <span className='text-4xl'>T</span>
        <span className='text-4xl'>H</span>
        <span className='text-4xl'>D</span>
        <span className='text-4xl'>A</span>
        <span className='text-4xl'>Y</span>
      </Happy>
      {message ? <div className='text-5xl text-center'>{message}</div> : null}
    </div>
  );
}

export default Card;
