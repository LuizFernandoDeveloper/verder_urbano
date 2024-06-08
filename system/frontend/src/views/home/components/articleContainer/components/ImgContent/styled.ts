import styled from "styled-components";
import { BreakPoints, WebSystemColor } from "../../../../../../main-styles";

interface Props {
  img: string;
  edgeDirection?: "left" | "right";
}

export const ImageContentAside = styled.aside<Props>`
  width: 50%;
  height: 80%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  border-left: 1px solid
    ${(props) =>
      props.edgeDirection === "left"
        ? `none`
        : WebSystemColor.applicationBaseColor};

  border-right: 1px solid
    ${(props) =>
      props.edgeDirection === "right"
        ? `none`
        : WebSystemColor.applicationBaseColor};

  @media (max-width: ${BreakPoints.tablet}) {
    width: calc(50% - 20px);
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 90%;
    height: 300px;
    margin: 30px;
  }
`;
