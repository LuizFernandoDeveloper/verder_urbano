import { BannerTextContentSection } from "./styles";

interface IProps {
  title: string;
  text: string;
}

function Bannertext({ title, text }: IProps): JSX.Element {
  return (
    <BannerTextContentSection>
      <h2>{title}</h2>
      <p>{text}.</p>
    </BannerTextContentSection>
  );
}

export default Bannertext;
