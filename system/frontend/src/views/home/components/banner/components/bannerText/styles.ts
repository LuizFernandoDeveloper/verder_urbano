import { BreakPoints, WebSystemColor } from "./../../../../../../main-styles";
import styled from "styled-components";

export const BannerTextContentSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 15px;
  width: 500px;
  margin: 0 auto;
  border-bottom: 2px solid ${WebSystemColor.primaryTextColor};

  h2,
  p {
    color: ${WebSystemColor.primaryTextColor};
  }

  p {
    margin-top: 5px;
    width: 400px;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    width: 100%;

    p {
      width: 100%;
    }
  }
`;
