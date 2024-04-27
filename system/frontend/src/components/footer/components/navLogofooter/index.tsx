import ButtonFooter from "../ButtonFooter";
import { ContainerNavLogo } from "./styles";

interface Props {
  children?: string;
  width: string;
  height: string;
  img: string;
}
function NavLogofooter({ width, height, img }: Props): JSX.Element {
  return (
    <ContainerNavLogo>
      <ButtonFooter img={img} width={width} height={height} />
    </ContainerNavLogo>
  );
}
export default NavLogofooter;
