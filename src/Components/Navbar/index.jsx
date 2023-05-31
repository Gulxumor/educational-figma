import { Button, Image, Nav, Select, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Nav>
      <Wrapper nav>
        <Image.Img />
        <Image.Text />
      </Wrapper>

      <Wrapper>
        <Select>
          <option value="eng">ENG</option>
          <option value="uzb">UZB</option>
          <option value="rus">RUS</option>
        </Select>

        <Button>Sign Up</Button>
        <Button bc>Login</Button>
        <Image.Burger />
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
