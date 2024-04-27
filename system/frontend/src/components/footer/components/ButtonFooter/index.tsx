import { ContainerButton } from "./styles";

interface Props {
  children?: string;
  width: string;
  height: string;
  img: string;
  url?: string;
  target?: string;
  background?: string;
}

function ButtonFooter({
  width,
  height,
  img,
  children,
  url,
  target,
  background,
}: Props): JSX.Element {
  return (
    <ContainerButton
      to={url == undefined ? "/" : url}
      target={target == undefined ? "_self" : target}
      width={width}
      height={height}
      img={img}
      background={background}>
      {children}
    </ContainerButton>
  );
}

export default ButtonFooter;
