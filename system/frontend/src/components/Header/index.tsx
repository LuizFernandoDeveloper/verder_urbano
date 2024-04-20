import { useState } from "react";
import {
  HeaderContainer,
  LinkButtonNav,
  LogoDiv,
  NavContainer,
  NavContainerMobile,
} from "./styled";
import {
  BsPersonWorkspaceIcon,
  CiUserIcon,
  FaCartShoppingIcon,
  IoMenuOutlineIcon,
} from "../../main-styles";

function Header(): JSX.Element {
  const [activatingHome, setActivatingHome] = useState(false);
  const [activetingFish, setActivetingFish] = useState(false);
  const [activatingVegetables, setActivatingVegetables] = useState(false);
  const [activetingContact, setActivetingContact] = useState(false);
  const [activetingLogin, setActivetingLogin] = useState(false);
  const [activetingWorker, setActivetingWorker] = useState(false);
  const [activetingCart, setActivetingCart] = useState(false);
  const [activeWorkSpace, setActiveWorkSpace] = useState(false); // mais pra frete use o redux
  const [activeButtonMenu, setActiveButtonMenu] = useState(false);
  const [activeButtonHoverColorLogin, setActiveButtonHoverColorLogin] =
    useState(false);
  const [activeButtonHoverColorWork, setActiveButtonHoverColorWork] =
    useState(false);

  function isButtonNameValide(
    buttonNameToValidade: string,
    nameButton: string
  ): boolean {
    return buttonNameToValidade === nameButton ? true : false;
  }

  function isActiveButton(nameButton: string): void {
    setActivatingHome(isButtonNameValide("home", nameButton));
    setActivetingFish(isButtonNameValide("fish", nameButton));
    setActivatingVegetables(isButtonNameValide("vegetable", nameButton));
    setActivetingContact(isButtonNameValide("contact", nameButton));
    setActivetingLogin(isButtonNameValide("login", nameButton));
    setActivetingWorker(isButtonNameValide("worker", nameButton));
    setActivetingCart(isButtonNameValide("cart", nameButton));
  }

  function isActiveButtonHoverColor(nameButton?: string): void {
    if (nameButton == "work") {
      setActiveButtonHoverColorWork(!activeButtonHoverColorWork);
      setActiveButtonHoverColorLogin(false);
    } else {
      setActiveButtonHoverColorLogin(!activeButtonHoverColorLogin);
      setActiveButtonHoverColorWork(false);
    }
  }

  function menuButton(): void {
    setActiveButtonMenu(!activeButtonMenu);
  }

  return (
    <HeaderContainer className="container">
      <LogoDiv />

      <NavContainerMobile>
        <IoMenuOutlineIcon onClick={menuButton} />
      </NavContainerMobile>

      <NavContainer
        is_open={activeButtonMenu ? "true" : "false"}
        className={activeButtonMenu ? "isActive__Button__menu--mobile" : ""}>
        <LinkButtonNav
          to="/"
          paddingbuttonlink="10px"
          onClick={() => isActiveButton("home")}
          activatingthebuttonbordercolor={
            activatingHome == true ? "true" : "false"
          }>
          HOME
        </LinkButtonNav>
        <LinkButtonNav
          to="/"
          paddingbuttonlink="10px"
          onClick={() => isActiveButton("fish")}
          activatingthebuttonbordercolor={
            activetingFish == true ? "true" : "false"
          }>
          PEIXES
        </LinkButtonNav>
        <LinkButtonNav
          to="/"
          paddingbuttonlink="10px"
          onClick={() => isActiveButton("vegetables")}
          activatingthebuttonbordercolor={
            activatingVegetables == true ? "true" : "false"
          }>
          VERDURAS
        </LinkButtonNav>
        <LinkButtonNav
          to="/"
          paddingbuttonlink="10px"
          onClick={() => isActiveButton("contact")}
          activatingthebuttonbordercolor={
            activetingContact == true ? "true" : "false"
          }>
          CONTATO
        </LinkButtonNav>
        <LinkButtonNav
          to="/"
          className="marginElemt"
          onMouseEnter={() => isActiveButtonHoverColor()}
          onMouseLeave={() => isActiveButtonHoverColor()}
          hovercolor={activeButtonHoverColorLogin == true ? "true" : "false"}
          onClick={() => isActiveButton("login")}
          activatingthebuttonbordercolor={
            activetingLogin == true ? "true" : "false"
          }>
          <CiUserIcon />
          <p>
            Faça Login ou
            <br />
            crie uma conta
          </p>
        </LinkButtonNav>
        {activeWorkSpace && (
          <LinkButtonNav
            to="/"
            className="marginElemt"
            onMouseEnter={() => isActiveButtonHoverColor("work")}
            onMouseLeave={() => isActiveButtonHoverColor("work")}
            hovercolor={activeButtonHoverColorWork == true ? "true" : "false"}
            onClick={() => isActiveButton("worker")}
            activatingthebuttonbordercolor={
              activetingWorker == true ? "true" : "false"
            }>
            <BsPersonWorkspaceIcon />
            <p>
              Area de
              <br />
              trabalho
            </p>
          </LinkButtonNav>
        )}
        <LinkButtonNav
          to="/"
          paddingbuttonlink="6px"
          onClick={() => isActiveButton("cart")}
          activatingthebuttonbordercolor={
            activetingCart == true ? "true" : "false"
          }>
          <FaCartShoppingIcon />
          {activeButtonMenu && (
            <p>
              Seu carrinho
              <br />
              de Compras
            </p>
          )}
        </LinkButtonNav>
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
