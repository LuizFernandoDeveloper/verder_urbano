import {
  BreakPoints,
  BsPersonWorkspaceIcon,
  CiUserIcon,
  FaCartShoppingIcon,
  WebSystemColor,
} from "./../../main-styles";
import styled, { keyframes } from "styled-components";
import logoSVG from "../../assets/logo/logo_verde_urbano.svg";
import { Link } from "react-router-dom";

const slideIn = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
`;

type PropsNavContainer = {
  is_open: "true" | "false";
};

const slideOut = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0px;
  }
`;

type PropsLInkButtonNAv = {
  activatingthebuttonbordercolor?: "true" | "false";
  width?: string;
  paddingbuttonlink?: string;
  hovercolor?: "true" | "false";
};

export const HeaderContainer = styled.header`
  width: 80vw;
  height: 80px;
  background-color: ${WebSystemColor.applicationBaseColor};
  border-radius: 30px;
  padding: 10px 5px 10px 5px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .isActive__Button__menu--mobile {
    display: initial;
    height: auto;
    width: 85%;
    animation: ${slideIn} 1s ease;
  }

  @media (max-width: ${BreakPoints.desktop}) {
    width: 95vw;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 70%;
    justify-content: center;
  }
`;

export const LogoDiv = styled.div`
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

export const NavContainerMobile = styled.nav`
  display: none;
  margin-left: 20px;
  width: 100px;
  align-items: center;
  justify-content: center;
  @media (max-width: ${BreakPoints.mobile}) {
    display: flex;
  }
`;

export const NavContainer = styled.nav<PropsNavContainer>`
  width: calc(100% - 20%);
  height: calc(100% - 20px);
  align-items: center;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${BreakPoints.mobile}) {
    width: 0px;
    height: 350px;
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: ${WebSystemColor.applicationBaseColor};
    left: 0px;
    top: 120px;
    overflow: hidden;
    border-radius: 0px 15px 15px 0px;
    animation: ${slideOut} 1s ease;

    &:nth-child(7) {
      justify-content: left;
      align-items: end;
    }
  }
`;

export const LinkButtonNav = styled(Link)<PropsLInkButtonNAv>`
  width: ${(props) => props.width};
  font-size: 15px;
  padding: ${(props) =>
    props.paddingbuttonlink != "0px" ? props.paddingbuttonlink : "0px"};
  color: ${WebSystemColor.primaryTextColor};
  border-bottom: 3px solid
    ${(props) =>
      props.activatingthebuttonbordercolor === "true"
        ? WebSystemColor.buttonEdge
        : WebSystemColor.buttonEdgeNone};
  display: flex;
  align-items: center;

  &:hover,
  & > *:hover {
    color: ${WebSystemColor.buttonHouverColor};
  }

  p {
    font-size: 10px;
    @media (max-width: ${BreakPoints.mobile}) {
      font-size: 20px;
    }
  }

  ${CiUserIcon}, ${BsPersonWorkspaceIcon}, ${FaCartShoppingIcon} {
    font-size: 40px;
    margin-right: 5px;
    color: ${(props) =>
      props.hovercolor === "true"
        ? WebSystemColor.buttonHouverColor
        : WebSystemColor.primaryTextColor};

    @media (max-width: ${BreakPoints.desktop}) {
      font-size: 30px;
    }

    @media (max-width: ${BreakPoints.tablet}) {
      font-size: 20px;
    }
    @media (max-width: ${BreakPoints.mobile}) {
      font-size: 40px;
    }
  }

  ${BsPersonWorkspaceIcon}, ${FaCartShoppingIcon} {
    @media (max-width: ${BreakPoints.mobile}) {
      margin-right: 10px;
    }
  }

  ${FaCartShoppingIcon}:hover {
    color: ${WebSystemColor.buttonHouverColor};
  }

  @media (max-width: ${BreakPoints.desktop}) {
    font-size: 13px;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    font-size: 10px;
    &:nth-child(5) {
      margin-right: 10px;
    }
  }

  @media (max-width: ${BreakPoints.mobile}) {
    justify-content: center;
    font-size: 24px;
  }
`;
