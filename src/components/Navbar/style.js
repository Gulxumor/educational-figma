import styled, { css } from 'styled-components';

export const common = css`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    display: flex;
`
export const Container = styled.div``;

export const Wrapper = styled.div`
    ${common}
    padding: 0 100px;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
`;
Wrapper.Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    cursor: pointer;
`
Wrapper.Link = styled.a`
    height: 25px;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.03em;
    color: white;
    text-decoration: none;
`
Wrapper.Btn = styled.div`
    height: 25px;
    font-weight: 600;
    font-size: 20px;
    color: white;
`