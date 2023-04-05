import styled from 'styled-components';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);  navbarga qoyaman */
border: 1px solid black;
 `;

export const Title = styled.h1`
  margin-bottom: 20px;
  `;
export const Description = styled.p``

export default { Container, Title, Description };
