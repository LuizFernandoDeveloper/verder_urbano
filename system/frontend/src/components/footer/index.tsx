import NavLogofooter from "./components/navLogofooter";
import NavStack from "./components/navStack";
import { IStack, listStack, logoImage } from "./mock";
import { ContainerFooter, FooterText } from "./styled";

function Footer(): JSX.Element {
  const list: IStack[] = listStack();
  const logo: string = logoImage();
  return (
    <ContainerFooter>
      <NavLogofooter img={logo} width="200px" height="70px" />
      <FooterText>Tecnologias utilizadas</FooterText>
      <NavStack list={list} />
    </ContainerFooter>
  );
}
export default Footer;
