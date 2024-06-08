import { BreakPoints, WebSystemColor } from "./../../../../main-styles";
import styled from "styled-components";

export const BannerContainer = styled.section`
  padding: 20px;
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${WebSystemColor.applicationBaseColor};
  overflow: hidden;
  margin-bottom: 100px;

  @media (max-width: ${BreakPoints.mobile}) {
    height: auto;
  }
`;

export const BannerTop = styled.section`
  width: 100%;
  height: 100px;
`;

export const BannerBottom = styled.section`
  width: 500px;
  height: 400px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 10px;

  @media (max-width: ${BreakPoints.mobile}) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

export const BannerVerticalLine = styled.div`
  width: 3px;
  height: 100%;
  background-color: ${WebSystemColor.primaryTextColor};

  @media (max-width: ${BreakPoints.mobile}) {
    margin-top: 18px;
    display: none;
  }
`;
