import styled from 'styled-components';
import { ReactComponent as logo } from '../Assets/icons/logo.svg';
import { ReactComponent as search } from '../Assets/icons/search.svg';
import { ReactComponent as notification } from '../Assets/icons/notification.svg';
const Logo = styled(logo)``
const Search = styled(search)``
const Notification = styled(notification)``

const Container = styled.header`
width: 100%;
background: linear-gradient(180deg, #0B1220 12.29%, rgba(0, 0, 0, 0.07) 100%);
`;
const Wrapper = styled.div`
  max-width: 1440px;
  height: 133px;
  width: 100%;
  margin: auto;
  padding: 50px 56px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 40px;

  @media (max-width:1300px) {
  padding: 40px 46px;
  } 
  @media (max-width:1200px) {
  padding: 30px 36px;
  }
`;
const Column = styled.div`
display: flex;
align-items: center;
`

const NavItems = styled.ul`
display: flex;
align-items: center;
gap: 40px;

@media (max-width:1300px) {
    gap: 35px;
} 
@media (max-width:1200px) {
    gap: 30px;
}

@media (max-width:1050px) {
   display: none;
}

`
NavItems.NavItem = styled.li`
list-style-type: none;
`
NavItems.NavItem.NavLink = styled.a`
text-decoration: none;
`
export { Container, Wrapper, Column, Logo, NavItems, Search, Notification };