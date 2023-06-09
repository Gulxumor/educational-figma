import logo from "../../assets/icons/logo.svg";
import notification from "../../assets/icons/notification.svg";
import search from "../../assets/icons/search.svg";
import { Wrapper, Container } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Inner>
          <Wrapper.Link href="#movies">Movies</Wrapper.Link>
          <Wrapper.Link href="#shows">TV Shows</Wrapper.Link>
          <Wrapper.Link href="#docs">Documentaries</Wrapper.Link>
        </Wrapper.Inner>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <Wrapper.Inner>
          <img src={search} alt="search" />
          <img src={notification} alt="notification" />
          <Wrapper.Btn>Sign Up</Wrapper.Btn>
        </Wrapper.Inner>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
