import styled from "styled-components";
import { common } from "../Main/style";
import { ReactComponent as app } from "../../assets/icons/app-store.svg";
import { ReactComponent as google } from "../../assets/icons/google-play.svg";

export const Wrapper = styled.footer`
  background-color: var(--blue);
  ${common}
  font-family:var(--font);
  color: #ffffff;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .img-wrapper {
    display: flex;
    gap: 20px;
  }
`;
export const Container = styled.div`
  padding: 70px 100px 103px 144px;
  display: flex;
  gap: 70px;
  background: yellow;
`;
Wrapper.Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ g }) => (g ? "16px" : "8px")};
`;
Wrapper.InnerWrapper = styled.div`
  width: 242px;
`;
Wrapper.SubTitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin: 57px 0 9px;
  height: 18px;
  width: 242px;
`;
Wrapper.Title = styled.p`
  height: 30px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;
Wrapper.Text = styled.a`
  display: block;
  font-size: 14.5px;
  font-weight: 500;
  line-height: 35px;
  font-weight: 500;
  margin-top: ${({ mt }) => (mt ? "40px" : "")};
  color: inherit;
  text-decoration: none;
`;
export const Img = styled.img`
  cursor: pointer;
`;
Wrapper.App = styled(app)`
  cursor: pointer;
`;
Wrapper.Google = styled(google)`
  cursor: pointer;
`;
