import { BreakPoints, WebSystemColor } from "../../../../../../main-styles";
import styled from "styled-components";

interface PropsTextContentSection {
  edgeDirection: "left" | "right";
}

export const TextContentSection = styled.section<PropsTextContentSection>`
  width: 50%;
  height: 75%;
  margin: 10px;
  padding-left: 20px;
  color: ${WebSystemColor.primaryTextColor};

  border-right: 3px solid
    ${(props) =>
      props.edgeDirection === "right"
        ? WebSystemColor.applicationBackgroundColor
        : `none`};

  border-left: 3px solid
    ${(props) =>
      props.edgeDirection === "right"
        ? `none`
        : WebSystemColor.applicationBackgroundColor};

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 40px;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
  }

  p,
  h2 {
    display: flex;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    width: calc(50% -20px);

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: calc(90% - 20px);
    height: 50%;
    border: none;
    margin: 30px;

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
    }
  }
`;
