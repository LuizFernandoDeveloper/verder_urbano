import ImgContent from "./components/ImgContent";
import TextContent from "./components/Textcontent";
import { ArticleContainer } from "./styles";
interface PropsContent {
  title: string;
  text: string;
  direction: "left" | "right";
  img: string;
}
function Container({ title, text, direction, img }: PropsContent): JSX.Element {
  return (
    <ArticleContainer className="container">
      {direction == "right" ? (
        <>
          <TextContent title={title} text={text} direction={direction} />
          <ImgContent img={img} />
        </>
      ) : (
        <>
          <ImgContent img={img} />
          <TextContent title={title} text={text} direction={direction} />
        </>
      )}
    </ArticleContainer>
  );
}

export default Container;
