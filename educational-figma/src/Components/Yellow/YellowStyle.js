import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/classroom.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

export const Icon = styled(icon)``
export const Arrow = styled(arrow)`
position: absolute;
top: 25%;
left: 80%;
`
export const Container = styled.div`
max-width: 1400px;
width: 100%;
margin: 0 auto;
height: 742px;
background: #FFC43B;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;

div{
    position: relative;
}
`
export const Input = styled.input`
width: 360px;
height: 73px;
background: #FFFFFF;
border-radius: 46px;
font-family: 'Montserrat';
font-weight: 700;
font-size: 24px;
line-height: 29px;
color: #979797;
padding-left: 30px;
border: none;
outline: none;
`
export const Text = styled.p`
width: 181px;
height: 38px;
font-family: 'Montserrat';
font-weight: 400;
font-size: 20px;
line-height: 24px;
text-align: center;
color: #979797;
`