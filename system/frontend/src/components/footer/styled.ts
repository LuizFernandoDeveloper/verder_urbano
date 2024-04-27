import styled from "styled-components";
import { BreakPoints, WebSystemColor } from "../../main-styles";

export const ContainerFooter = styled.footer`
  width: 50%;
  height: 200px;
  padding: 10px;
  background-color: ${WebSystemColor.applicationBaseColor};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 25px 25px 0px 0px;
  text-align: center;

  @media (max-width: ${BreakPoints.desktop}) {
    width: 70%;
  }

  @media (max-width: ${BreakPoints.tablet}) {
    width: 90%;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 90%;
    height: 350px;
    overflow: hidden;
    border-radius: 25px;
  }
`;

export const FooterText = styled.h3`
  margin-top: 20px;
`;
