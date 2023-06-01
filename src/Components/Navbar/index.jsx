import { Button, Image, Nav, Select, Wrapper } from "./style";
import { useTranslation } from "react-query";

const Navbar = () => {
  const { t } = useTranslation();

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

        <Button>{t("nav.sign_up")}</Button>
        <Button bc>{t("nav.login")}</Button>
        <Image.Burger />
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
