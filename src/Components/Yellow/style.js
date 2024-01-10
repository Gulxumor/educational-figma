import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/classroom.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

export const Icon = styled(icon)``;
export const Arrow = styled(arrow)`
  padding-right: 2px;
`;

export const Container = styled.div`
  max-width: 1590px;
  width: 100%;
  margin: 0 auto;
  height: 742px;
  background: #ffc43b;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  background: black;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  background: #ffffff;
  border-radius: 46px;
  gap: 10px;
  padding: 0 30px;
`;

Div.Input = styled.input`
  height: 80px;
  font-family: var(--font);
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #979797;
  border: none;
  outline: none;
`;

export const Text = styled.p`
  height: 38px;
  font-family: var(--font);
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #979797;
`;
