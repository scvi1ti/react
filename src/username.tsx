import styled from 'styled-components';
import React from 'react';


export const Block2 = styled.div`
width:clamp(200px, 20vw, 300px);
border:none;
padding:60px 20px;
background-color:#6767ed;
display:flex;
display: flex;
align-items: center;
margin:100px auto;


`

export const Icon = styled.div`
width:50px;
height:50px;
background-color:white;
display: flex;
justify-content: center;
align-items: center;`

export const Fullname = styled.div`
width:100%;
display: flex;
justify-content: center;
`



export const Username = ({username}) => {
     const initials = username
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
    



return(
    <Block2>
        <Icon>{initials}</Icon>
        <Fullname>{username}</Fullname>
    </Block2>
)
};