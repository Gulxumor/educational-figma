import styled from "styled-components";

export const Container = styled.div`
max-width: 1400px;
width: 100%;
margin: 100px auto;
height: 683px;
background: #3A5AFF;
color: white;
padding-top: 70px;
position: relative;
`
export const Title = styled.p`
height: 44px;
font-family: 'Montserrat';
font-weight: 700;
font-size: ${({ t }) => t ? "36px" : "18px"};
line-height: 44px;
text-align: ${({ t }) => t ? "center" : "left"};
`
export const Text = styled.p`
width: 607px;
font-family: 'Montserrat';
font-weight: 500;
font-size: 16px;
line-height: 20px;
`
export const Wrapper = styled.div`
margin: 0 40px;
`
export const Hr = styled.hr`
width: ${({ h }) => h ? "116px" : "2px"};
height: ${({ h }) => h ? "8px" : "400px"};
background: #FFFFFF;
margin: 0 auto 50px auto;
`
export const Div = styled.div`
height: 108.76347351074219px;
width: 488.4964904785156px;
background-color: white;
border-radius: 26.5px;
font-family: "Poppins";
color: black;
font-size: 24px;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
left: 3%;
top: 10%;
`
export const Image = styled.img`
margin:120px 0 212px 400px;
margin-left: ${({ ml }) => ml ? "0" : "400px"};
`
export const Inner = styled.div`
display: flex;
`
export const Outer = styled.div`
position: relative;
`