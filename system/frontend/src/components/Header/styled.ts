import { Link } from "react-router-dom";
import { BreakPoints, WebSystemColor } from "./../../main-styles";
import styled from "styled-components";
import logoSVG from "../../assets/logo/logo_verde_urbano.svg";

export const HeaderContainer = styled.header`
  width: 80vw;
  height: 80px;
  background-color: ${WebSystemColor.applicationBaseColor};
  padding: 10px 5px 10px 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .isActive__nav__mobile {
    display: flex;
    width: auto;
  }

  .itIsDeactivated__nav__mobile {
    display: none;
  }

  .isActive__nav__desktop {
    display: flex;
  }

  .itIsDeactivated__nav__desktop {
    display: none;
  }

  @media (max-width: ${BreakPoints.desktop}) {
    width: 95vw;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 90%;
    justify-content: space-around;
  }
`;

export const LogoDiv = styled(Link)`
  width: 20%;
  height: 90%;
  background-image: url(${logoSVG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  margin-left: 15px;

  @media (max-width: ${BreakPoints.desktop}) {
    width: 15%;
    margin-left: 5px;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    width: 13%;
    margin-left: 5px;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 25vw;
    justify-content: center;
  }
`;
