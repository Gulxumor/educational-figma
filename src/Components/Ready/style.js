import styled from 'styled-components';
export const Container = styled.div`
max-width: 1400px;
width: 100%;
margin: 0px auto;
`

export const Wrapper = styled.div`
max-width: 1400px;
width: 100%;
overflow: hidden;
margin: 100px 10px 130px 10px;
display: flex;
`
Wrapper.Div = styled.div`
display: flex;
`
Wrapper.Hr = styled.hr`
height: 46px;
color: ${({ c }) => c ? c : "#3A5AFF"};
`
Wrapper.Text = styled.p`
width: 190px;
height: 48px;
font-family: 'Montserrat';
font-weight: 800;
font-size: 16px;
line-height: 20px;
margin: 0 145px;
`
export const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 64px;
margin-bottom: 126px;
`
Wrapper.Title = styled.p`
width: 540px;
height: 188px;
font-family: 'Montserrat';
font-weight: 800;
font-size: 64px;
line-height: 100px;
`
export const Image = styled.img`
height: 432px;
width: 541px;
`
export const Span = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
`