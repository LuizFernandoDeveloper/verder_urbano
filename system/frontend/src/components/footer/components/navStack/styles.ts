import { BreakPoints } from "../../../../main-styles";
import { ContainerButton } from "./../ButtonFooter/styles";
import styled from "styled-components";

export const ContainerNavStack = styled.nav`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
  margin-bottom: 15px;

  h3 {
    margin-top: 15px;
  }

  ${ContainerButton} {
    color: transparent;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    display: grid;
    grid-template-columns: repeat(3, 70px);
    gap: 20px;
  }
`;
