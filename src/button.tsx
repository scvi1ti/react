import styled from 'styled-components';
import React, { useState } from 'react';

export const Blocks = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 100px;
  border: 1px solid black;
`;


export const Button = styled.button`
  width: clamp(100px, 11vw, 200px);
  opacity: ${props => props.$disabled ? 0.5 : 1};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
`;

export const Btn = styled.button`
  width: clamp(50px, 6vw, 100px);
`;

export const Btnmain = () => {

  const [disabled, setDisabled] = useState(false); 

  const toggleBlock = () => {
    setDisabled(prev => !prev);
  };


  const handleClick1 = () => { disabled ? alert('кнопка заблокирована') : console.log('Нажата кнопка Primery');};
  const handleClick2 = () => {  disabled ? alert('кнопка заблокирована') : console.log('Нажата кнопка Secondary');};
  const handleClick3 = () => { disabled ? alert('кнопка заблокирована') :  console.log('Нажата кнопка Secondary2');};

  return (
    <Blocks className="buttons">
      <Button className="button1" onClick={handleClick1} $disabled={disabled}>Primery</Button>
      <Button className="button2" onClick={handleClick2} $disabled={disabled}>Secondary</Button>
      <Button className="button3" onClick={handleClick3} $disabled={disabled}>Secondary2 </Button>
      <Btn onClick={toggleBlock}>
        {disabled ? 'on Block' : 'off block'}
      </Btn>
    </Blocks>
  );
};