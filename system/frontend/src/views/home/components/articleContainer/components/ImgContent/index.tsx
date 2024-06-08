import { ImageContentAside } from "./styled";
interface Props {
  img: string;
  edgeDirection?: "left" | "right";
}
function ImgContent({ img, edgeDirection }: Props): JSX.Element {
  return <ImageContentAside edgeDirection={edgeDirection} img={img} />;
}

export default ImgContent;
