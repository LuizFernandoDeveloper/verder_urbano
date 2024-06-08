import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  BreakPoints,
  BsPersonWorkspaceIcon,
  CiUserIcon,
  FaCartShoppingIcon,
  WebSystemColor,
} from "../../../../main-styles";

type PropsLinkButton = {
  bottom_edge?: "true" | "false";
  width?: string;
  padding_button_link?: string;
  hover_color?: "true" | "false";
};

export const LinkButtonNav = styled(Link)<PropsLinkButton>`
  width: ${(props) => props.width};
  font-size: 15px;
  padding: ${(props) =>
    props.padding_button_link != "0px" ? props.padding_button_link : "0px"};
  color: ${WebSystemColor.primaryTextColor};
  border-bottom: 3px solid
    ${(props) =>
      props.bottom_edge === "true"
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
      props.hover_color === "true"
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
