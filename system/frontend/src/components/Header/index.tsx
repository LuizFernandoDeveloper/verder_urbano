import { useEffect, useState } from "react";
import NavContainer from "./components/NavContainer";
import { HeaderContainer, LogoDiv } from "./styled";

function Header(): JSX.Element {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      setMobile(width <= 640);
    }

    // Executa uma vez quando o componente monta
    handleResize();

    // Adiciona um listener de redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Limpa o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // O array vazio como segundo argumento significa que este useEffect só é executado uma vez, quando o componente monta

  return (
    <HeaderContainer className="container">
      <LogoDiv to="/" />
      <NavContainer
        navType="desktop"
        className={
          mobile == false
            ? "isActive__nav__desktop"
            : "itIsDeactivated__nav__desktop"
        }
      />
      <NavContainer
        navType="mobile"
        className={
          mobile === true
            ? "isActive__nav__mobile"
            : "itIsDeactivated__nav__mobile"
        }
      />
    </HeaderContainer>
  );
}

export default Header;
