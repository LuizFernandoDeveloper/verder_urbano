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
  buttonColorPrimary: "#2070E5",
  buttonColorSecondary: "green",
};

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: ${WebSystemColor.applicationBackgroundColor};
  padding-top: 20px;

  &::-webkit-scrollbar {
    width: 10px;
    margin-right: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${WebSystemColor.applicationBackgroundColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${WebSystemColor.applicationBaseColor};
    border-radius: 5px;
    border: solid 1px white;
  }
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
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;

    @media (max-width: ${BreakPoints.desktop}){
      max-width: 950px;
    }
    
    @media (max-width: ${BreakPoints.tablet}) {
      max-width: 100vw;
      width: 90%;
    }

     @media (max-width: ${BreakPoints.mobile}) {
      max-width: 100vw;
      width: 90%;
    }
  }
`;
