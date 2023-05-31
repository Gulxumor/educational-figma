import styled from 'styled-components';
export const App = styled.img``

export const Image = styled.img`
    width: 494.45px;
    height: 436.15px;
    margin-right:80px;
`
export const Container = styled.header`
    font-family: var(--font);
    max-width: 1400px;
    max-height: 773px;
    width: 100%;
    margin: 80px auto;
    padding: 0 124px 0 145px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
Container.Title = styled.p`
    width: 522px;
    height: 188px;
    font-weight: 800;
    font-size: 74px;
    line-height: 100px;
`
Container.Text = styled.p`
    width: 476px;
    height: 62px;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    margin: 35px 0 48px 0;
    color:#544837;
`
Container.Add = styled.p`
    width: 160px;
    height: 29px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin: 48px 0 6px 0;
`
export const Wrapper = styled.div`
    display:${({ df }) => df ? "flex" : "block"};
`
