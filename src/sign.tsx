import styled from "styled-components"

const BlockSignIn = styled.div`
width:80px;
padding:10px 20px;
margin:100px auto;
background-color:#f8dfdf;
`



export const SignIn = ({text}) =>{
    
    return(
        <BlockSignIn>
          {text}  
        </BlockSignIn>
    )
}