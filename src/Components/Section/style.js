import styled from 'styled-components';

export const Image = styled.img`
    width: 50px;
    height: 50px;
`

export const Container = styled.section`
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    max-height: 577px;
    background: #F2F2F2;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Wrapper = styled.div`
     display: flex;
    align-items: center;
    margin: 0 195px 0 145px;
    gap: 63px;
`
Container.Title = styled.p`
    height: 44px;
    font-family: var(--font);
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    margin-top: 40px;
    margin-bottom: 16px;
`
export const Hr = styled.hr`
    height: 8px;
    width: 116px;
    background:${({ hr }) => hr ? "#fff" : " #3A5AFF"};
    margin-bottom: ${({ m }) => m ? "118px" : "0"};
`
Container.Button = styled.button`
    height: 53px;
    width: 159px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #3a5aff;
    color: #fff;
    border: none;
    outline: none;
    font-family: var(--font);
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    text-align: center;
    margin-bottom: 55px;

:active{
    transform:scale(0.95);
}
`
Wrapper.Div = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    margin-top: 66px;

`
Container.Text = styled.p`
    height: 33px;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    margin-top: 30px;
    margin-bottom: 15px;
`
Container.Description = styled.p`
    width: 200px;
    font-family: var(--font);
    text-align: left;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 28px;
`
Container.Anchor = styled.a`
    font-family: var(--font);
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
    text-align: left;
    cursor: pointer;
    margin-bottom: 50px;
`