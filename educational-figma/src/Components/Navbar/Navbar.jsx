import React from 'react';
import { Burger, Button, Img, Nav, Select, Text, Wrapper } from "./NavbarStyle";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Nav>
        <Wrapper>
          <Img />
          <Text />
        </Wrapper>

        <Wrapper>
          <Select>
            <option value="eng">ENG</option>
            <option value="uzb">UZB</option>
            <option value="rus">RUS</option>
          </Select>

          <Button>Sign Up</Button>
                <Button bc>Login</Button>
                <Burger/>
        </Wrapper>
      </Nav>
    );
  }
}
export default Navbar;
