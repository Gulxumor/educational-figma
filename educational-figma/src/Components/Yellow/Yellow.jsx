import React from "react";
import { Arrow, Container, Icon, Input, Text } from "./YellowStyle";

class Yellow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Icon />
        <div>
          <Input placeholder="Write code here" />
          <Arrow />
        </div>
        <Text>Or try with 1234</Text>
      </Container>
    );
  }
}
export default Yellow;
