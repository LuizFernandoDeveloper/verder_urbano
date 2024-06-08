import {
  BannerImageButton,
  BannerImageContainer,
  BannerImageText,
} from "./styled";

interface IProps {
  img: string;
  textContent: string;
  buttonText: string;
  buttonColor: "green" | "blue";
}

function BannerImage({
  img,
  textContent,
  buttonText,
  buttonColor,
}: IProps): JSX.Element {
  return (
    <BannerImageContainer img={img}>
      <BannerImageButton color={buttonColor}>{buttonText}</BannerImageButton>
      <BannerImageText>
        <p>{textContent}</p>
      </BannerImageText>
    </BannerImageContainer>
  );
}

export default BannerImage;
