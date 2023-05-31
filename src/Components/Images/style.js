import styled from "styled-components";

export const Container = styled.div`
max-width: 1400px;
width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
Container.Outer = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;
gap: ${({ g }) => g ? "0px" : "100px"};

`
Container.Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`

Container.Image = styled.img`
width: ${({ w }) => w ? "600px" : "516px"};
`
Container.Title = styled.p`
height: 44px;
font-family: var(--font);
font-weight: 800;
font-size: 36px;
line-height: 44px;
margin-bottom: 9px;
`
Container.Text = styled.p`
height: 120px;
width: 486px;
font-family: var(--font);
font-weight: 500;
font-size: 28px;
line-height: 40px;
`
Container.Span = styled.span`
display: flex;
gap: 20px;
margin: 54px 0 112px 0;
`
Container.Still = styled.p`
font-family: "Poppins";
font-size: 36px;
font-weight: 400;
line-height: 44px;
text-align: right;
`
Container.A = styled.a`
height: 44px;
font-family: var(--font);
font-weight: 700;
font-size: 36px;
line-height: 44px;
text-decoration-line: underline;
color: #3A5AFF
`