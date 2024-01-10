import styled from "styled-components";

export const Container = styled.div`
  max-width: 1590px;
  width: 100%;
  margin: 100px auto;
  height: 683px;
  background: #3a5aff;
  color: white;
  padding-top: 70px;
  position: relative;
`;
Container.Title = styled.p`
  height: 44px;
  font-family: var(--font);
  font-weight: 700;
  font-size: ${({ t }) => (t ? "36px" : "18px")};
  line-height: 44px;
  text-align: ${({ t }) => (t ? "center" : "left")};
`;
Container.Text = styled.p`
  width: 607px;
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
Container.Wrapper = styled.div`
  margin: 0 40px;
`;
Container.Hr = styled.hr`
  width: ${({ h }) => (h ? "116px" : "2px")};
  height: ${({ h }) => (h ? "8px" : "400px")};
  background: #ffffff;
  margin: 0 auto 50px auto;
`;
Container.Div = styled.div`
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
`;
Container.Image = styled.img`
  margin: 120px 0 212px 400px;
  margin-left: ${({ ml }) => (ml ? "0" : "400px")};
`;
Container.Inner = styled.div`
  display: flex;
`;
Container.Outer = styled.div`
  position: relative;
`;
