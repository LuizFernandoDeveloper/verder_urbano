import { TextContentSection } from "./styled";
interface PropsTextContent {
  title: string;
  text: string;
  direction: "left" | "right";
}
function TextContent({
  title,
  text,
  direction,
}: PropsTextContent): JSX.Element {
  return (
    <TextContentSection edgeDirection={direction}>
      <h2>{title}</h2>
      <p>{text}.</p>
    </TextContentSection>
  );
}

export default TextContent;
