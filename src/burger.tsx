import styled from 'styled-components';
import React, { useState } from 'react';

const BurgerBlock = styled.div`
width: 72px;
    padding: 30px;
    background-color: black;
    color: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    `;
const Line = styled.div`
height:4px;
width:100%;
background-color:white;
border-radius:2px;
transition:0.5s;

&:nth-child(1) {
    transform: ${({ open }) => (open ? 'rotate(45deg) translate(15px, 15px)' : 'none')};
  }
    &:nth-child(2) {
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ open }) => (open ? 'rotate(-45deg) translate(5px, -5px)' : 'none')};
  }
`;



export const Burger = () => {
    const [open, setOpen] = useState(false);







    return(
       <BurgerBlock onClick={() => setOpen(!open)}>
        <Line open={open} />
        <Line open={open} />
        <Line open={open} />
       </BurgerBlock>
    );
};