import styled, { css } from "styled-components";
import { ReactComponent as black } from "../../assets/icons/black-background.svg";
import { ReactComponent as blue } from "../../assets/icons/blue-rectangle.svg";

export const Black = styled(black)``;
export const Blue = styled(blue)``;

export const common = css`
  max-width: 1590px;
  width: 100%;
  margin: 0px auto;
`;
export const Container = styled.main`
  ${common}
  margin-bottom: 100px;
  background: blue;
`;
export const Title = styled.p`
  margin-top: 55px;
  text-align: center;
  font-family: "Poppins";
  font-size: 36px;
  font-weight: 800;
  line-height: 54px;
  letter-spacing: 0px;
`;
export const Hr = styled.hr`
  width: 116px;
  height: 8px;
  background: #3a5aff;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 44px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
`;
export const Card = styled.div`
  position: relative;
  height: 308px;
  width: 635px;
  border-radius: 32px;
  background-image: url("../src/assets/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  background: #ffc43b;
`;
export const Card1 = styled.div`
  position: relative;
  height: 308px;
  width: 635px;
  border-radius: 32px;
  background: linear-gradient(105.94deg, #378ddd 7.14%, #b0d7fb 75.4%);
`;
export const Sarlavha = styled.p`
  position: absolute;
  left: 3%;
  top: 25.26%;
  bottom: 56.75%;
  height: ${({ h }) => (h ? "55.41869354248047px" : "55.418678283691406px")};
  width: ${({ h }) => (h ? "251.44293212890625px" : " 373.9681091308594px")};
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`;
export const Button = styled.button`
  height: 34.10380935668945px;
  width: 90.56208038330078px;
  left: 38.355712890625px;
  top: 35.366790771484375px;
  border-radius: 39px;
  position: absolute;
  background-color: black;
  color: white;
`;
export const Text = styled.p`
  position: absolute;
  left: 3%;
  top: ${({ w }) => (w ? "57.79%" : "43.25%")};
  bottom: ${({ w }) => (w ? "25.95%" : "40.48%")};
  line-height: 24px;
  text-align: left;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  height: 50.0899658203125px;
  width: 251.44293212890625px;
  color: #ffffff;
`;
export const Anchor = styled.a`
  height: 33.03807067871094px;
  width: 251.44293212890625px;
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  position: absolute;
  z-index: 999;
  left: 3%;
  top: ${({ a }) => (a ? "85.28%" : "71.63%")};
  bottom: ${({ a }) => (a ? "5%" : "17.65%")};
  color: white;
`;

export const Code = styled.p`
  font-family: "Poppins";
  margin-top: ${({ m }) => (m ? "0px" : "145px")};
  font-weight: ${({ m }) => (m ? "500" : "800")};
  font-size: ${({ m }) => (m ? "24px" : "36px")};
  line-height: ${({ m }) => (m ? "26px" : "54px")};
  margin-bottom: ${({ m }) => (m ? "42px" : "11px")};
  text-align: center;
`;
