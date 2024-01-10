import { Arrow, Container, Icon, Div, Text } from "./style";

const Yellow = () => {
  return (
    <Container>
      <Icon />
      <Div>
        <Div.Input placeholder="Write code here" />
        <Arrow />
      </Div>
      <Text>Or try with 1234</Text>
    </Container>
  );
};
export default Yellow;
