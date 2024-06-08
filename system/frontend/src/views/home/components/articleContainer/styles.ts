import styled from "styled-components";
import { BreakPoints, WebSystemColor } from "../../../../main-styles";

export const ArticleContainer = styled.article`
  display: flex;
  margin: 35px auto;
  background-color: ${WebSystemColor.applicationBaseColor};
  width: 100%;
  height: 450px;
  align-items: center;

  @media (max-width: ${BreakPoints.mobile}) {
    flex-direction: column;
    width: 90%;
    height: auto;
  }
`;
