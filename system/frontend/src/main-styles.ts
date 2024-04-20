import { BsPersonWorkspace } from "react-icons/bs";
import { CiLogin, CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenuOutline } from "react-icons/io5";
import styled, { createGlobalStyle } from "styled-components";

export const BreakPoints = {
  desktop: "1024px",
  tablet: "768px",
  mobile: "640px",
};

export const WebSystemColor = {
  applicationBaseColor: "#020202",
  applicationBackgroundColor: "#2070E5",
  primaryTextColor: "#FFFFFF",
  secondaryTextColor: "#2070E5",
  thirdTextColor: "#020202",
  iconPrimaryColor: "#2070E5",
  iconSecondaryColor: "#FFFFFF",
  iconThirdColor: "#020202",
  buttonEdge: "#00FFFF",
  buttonEdgeNone: "rgba(0, 0, 0, 0)",
  buttonHouverColor: "#9DFF5E",
  mobileButtonBackgroundColor: "#020202",
};

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${WebSystemColor.applicationBackgroundColor};
  padding-top: 30px;
`;

export const IoMenuOutlineIcon = styled(IoMenuOutline)`
  width: 70px;
  height: 60px;
  color: ${WebSystemColor.primaryTextColor};

  &:hover,
  &:active {
    color: ${WebSystemColor.secondaryTextColor};
  }

  &:active {
    padding: 5px 5px 0px 0px;
  }
`;
export const CiUserIcon = styled(CiUser)`
  color: ${WebSystemColor.secondaryTextColor};
`;

export const CiLoginIcon = styled(CiLogin)`
  color: ${WebSystemColor.secondaryTextColor};
`;

export const BsPersonWorkspaceIcon = styled(BsPersonWorkspace)`
  color: ${WebSystemColor.secondaryTextColor};
`;

export const FaCartShoppingIcon = styled(FaCartShopping)`
  color: ${WebSystemColor.secondaryTextColor};
`;

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style:none;
    text-decoration: none;
  }

  body {
    background-color: ${WebSystemColor.applicationBackgroundColor};
    color: ${WebSystemColor.primaryTextColor};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${BreakPoints.desktop}){
      max-width: 950px;
    }
  }
`;
