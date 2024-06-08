/////////////////// mock for section ////////////////
export interface IMock {
  title: string;
  text: string;
}

export function sectionOne(): IMock {
  const mock: IMock = {
    title: "Porque empredemos\n com aquaponia ? ",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  };
  return mock;
}

export function sectionTwo(): IMock {
  const mock: IMock = {
    title: "Aonde estamos ",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
  };
  return mock;
}

///////// mock for Banner ///////////////////////////////////

import imgLeft from "../../assets/img/alface.svg";
import imgright from "../../assets/img/aqua.svg";

type bannerType = {
  img: string;
  text: string;
  buttonText: string;
  buttonColor: "green" | "blue";
};

export interface IBanner {
  bannerLeft: bannerType;
  bannerRight: bannerType;
  bannerTitle: string;
  bannerText: string;
}

export function bannerMockOne(): IBanner {
  const left: bannerType = {
    img: imgLeft,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    buttonText: "Veja mais Produtos",
    buttonColor: "blue",
  };
  const right: bannerType = {
    img: imgright,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    buttonText: "Veja mais Produtos",
    buttonColor: "green",
  };
  const banner: IBanner = {
    bannerLeft: left,
    bannerRight: right,
    bannerTitle: "Nosso Produtos",
    bannerText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
  };
  return banner;
}
