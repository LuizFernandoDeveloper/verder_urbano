import {
  BannerBottom,
  BannerContainer,
  BannerTop,
  BannerVerticalLine,
} from "./style";
import Bannertext from "./components/bannerText";
import BannerImage from "./components/bannerImage";

type bannerType = {
  img: string;
  text: string;
  buttonText: string;
  buttonColor: "green" | "blue";
};

interface IProps {
  bannerLeft: bannerType;
  bannerRight: bannerType;
  bannerTitle: string;
  bannerText: string;
}

function Banner({
  bannerLeft,
  bannerRight,
  bannerText,
  bannerTitle,
}: IProps): JSX.Element {
  return (
    <BannerContainer className="container">
      <BannerTop>
        <Bannertext title={bannerTitle} text={bannerText} />
      </BannerTop>
      <BannerBottom>
        <BannerImage
          img={bannerLeft.img}
          textContent={bannerLeft.text}
          buttonText={bannerLeft.buttonText}
          buttonColor={bannerLeft.buttonColor}
        />
        <BannerVerticalLine />
        <BannerImage
          img={bannerRight.img}
          textContent={bannerRight.text}
          buttonText={bannerRight.buttonText}
          buttonColor={bannerRight.buttonColor}
        />
      </BannerBottom>
    </BannerContainer>
  );
}

export default Banner;
