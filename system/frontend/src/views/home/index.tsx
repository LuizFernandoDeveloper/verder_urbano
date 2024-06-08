import Header from "../../components/Header";
import { MainContainer } from "../../main-styles";
import Container from "./components/articleContainer";
import { IMock, sectionOne, sectionTwo, IBanner, bannerMockOne } from "./mock";
import ImgOne from "../../assets/img/CICLEAQUAPONICS 1.svg";
import poli from "../../assets/img/Polygon1.png";
import Banner from "./components/banner";
import { Homecontainer } from "./styled";
import Footer from "../../components/footer";

function Home(): JSX.Element {
  const oneMock: IMock = sectionOne();
  const twoMock: IMock = sectionTwo();
  const banner: IBanner = bannerMockOne();
  return (
    <MainContainer>
      <Homecontainer>
        <Header />
        <Container
          title={oneMock.title}
          text={oneMock.text}
          direction="right"
          img={ImgOne}
        />
        <Container
          title={twoMock.title}
          text={twoMock.text}
          direction="left"
          img={poli}
        />
        <Banner
          bannerLeft={banner.bannerLeft}
          bannerRight={banner.bannerRight}
          bannerTitle={banner.bannerTitle}
          bannerText={banner.bannerText}
        />
      </Homecontainer>
      <Footer />
    </MainContainer>
  );
}

export default Home;
