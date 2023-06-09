import styled from 'styled-components';
import { common } from "../Navbar/style"

export const Container = styled.div``;
export const Wrapper = styled.div`
${common}
flex-direction: column;
/* grid-gap: 25px; */
`;
Wrapper.Title = styled.div`
    color: white;
    height: 133px;
    margin-top: 64px;
    font-weight: 700;
    font-size: 90px;
`;
Wrapper.Text = styled.div`
    color: white;
    height: 74px;
    font-weight: 700;
    font-size: 50px ;
`;

Wrapper.Subtitle = styled.div`
    color: white;
    width: 514px;
    height: 81px;
    font-family: var(--fontSecondary);
    font-weight: 500;
    font-size: 18px;
`;
Wrapper.Btn1 = styled.button`
    width: 193px;
    height: 48px;
    border: ${({ t }) => t ? "#fff" : "none"};
    background: #FA4776;
    color: #fff;
    cursor: pointer;
    border-radius: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
`;

Wrapper.Btn = styled.button`
    width: 120px;
    height: 48px;
    border: 1px solid #FFFFFF;
    color: #fff;
    border-radius: 41px;
    background-color: transparent;
    cursor: pointer;
    `;

Wrapper.Div = styled.div`
    display: flex;
    grid-gap: 25px;
    margin: 50px 0;
`
Wrapper.Movies = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    margin-top: 45px;
    color: white;
`
Wrapper.ImgWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;  
`
Wrapper.Img = styled.img`
    width: 182px;
    height: 256px;
    cursor: pointer;
  

`