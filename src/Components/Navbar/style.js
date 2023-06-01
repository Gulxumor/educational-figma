import styled from 'styled-components';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as text } from '../../assets/icons/text.svg';
import { ReactComponent as burger } from '../../assets/icons/burger.svg';

export const Image = styled.img`
    cursor: pointer;
    border: 2px solid rebeccapurple;
`

Image.Img = styled(logo)`
    cursor: pointer;
`
Image.Text = styled(text)`
    cursor: pointer;
`
Image.Burger = styled(burger)`
    cursor: pointer;
`

export const Nav = styled.nav`
    font-family: var(--font);
    max-width: 1400px;
    max-height: 773px;
    width: 100%;
    height: 78px;
    margin: 35px auto;
    padding: 0 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Select = styled.select`
    border: none;
    outline: none;
`
export const Button = styled.button`
    width: ${({ w }) => w ? "255px" : "110px"};
    height:${({ w }) => w ? "56px" : "44px"};
    cursor: pointer;
    border-radius: 4px;
    background: ${({ bc }) => bc ? "#fff" : "#3A5AFF"};
    border:${({ bc }) => bc ? " 1px solid #979797" : "none"};
    color:${({ bc }) => bc ? "#979797" : "#fff"};
    font-weight:${({ w }) => w ? " 800" : '600'};
    font-size: 16px;
    line-height: 20px;

:active{
    transform: scale(.95);
}
`