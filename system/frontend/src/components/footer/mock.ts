import logo from "../../assets/logo/logo_verde_urbano.svg";
import styled_components from "../../assets/logo/styled-components.png";
import esp32 from "../../assets/img/icon/esp32.jpeg";

export function logoImage(): string {
  return logo;
}

export interface IStack {
  img: string;
  nameStack: string;
  url: string;
  target: "_self" | "_blank" | "_parent" | "_top";
  background: string;
}

export function listStack(): Array<IStack> {
  const REACT: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    nameStack: "React",
    url: "https://react.dev/",
    target: "_blank",
    background: "none",
  };
  const HTML: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    nameStack: "HTML",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    target: "_blank",
    background: "none",
  };
  const CSS: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    nameStack: "CSS",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    target: "_blank",
    background: "none",
  };
  const SASS: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    nameStack: "SASS",
    url: "https://sass-lang.com/",
    target: "_blank",
    background: "none",
  };
  const STYLED: IStack = {
    img: styled_components,
    nameStack: "Styled Components",
    url: "https://styled-components.com/",
    target: "_blank",
    background: "none",
  };
  const SPRINGBOOT: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg",
    nameStack: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
    target: "_blank",
    background: "none",
  };
  const JAVA: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    nameStack: "Java",
    url: "https://www.java.com/pt-BR/",
    target: "_blank",
    background: "none",
  };
  const RUST: IStack = {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg",
    nameStack: "Rust",
    url: "https://www.rust-lang.org/pt-BR",
    target: "_blank",
    background: "white",
  };
  const ESP32: IStack = {
    img: esp32,
    nameStack: "Esp 32",
    url: "https://www.espressif.com/en/products/socs/esp32",
    target: "_blank",
    background: "none",
  };

  const listStack: Array<IStack> = [
    REACT,
    HTML,
    CSS,
    SASS,
    STYLED,
    SPRINGBOOT,
    JAVA,
    RUST,
    ESP32,
  ];
  return listStack;
}
