import { BreakPoints, WebSystemColor } from "./../../../../../../main-styles";
import styled from "styled-components";

interface IContainer {
  img: string;
}

interface IButtonColor {
  color: "green" | "blue";
}

export const BannerImageContainer = styled.aside<IContainer>`
  width: 40%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;

  @media (max-width: ${BreakPoints.mobile}) {
    background-repeat: repeat-x;
    width: 90%;
    height: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
  }
`;

export const BannerImageText = styled.div`
  width: 80%;
  height: 80px;
  margin: 0 auto;

  p {
    color: ${WebSystemColor.primaryTextColor};
    font-size: 13px;
  }

  @media (max-width: ${BreakPoints.mobile}) {
    height: auto;
    margin-bottom: 15px;

    P {
      @media (max-width: ${BreakPoints.mobile}) {
        font-size: 18px;
      }
    }
  }
`;

export const BannerImageButton = styled.button<IButtonColor>`
  width: 90%;
  height: 40px;
  color: ${WebSystemColor.primaryTextColor};
  font-size: 18px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: ${(props) =>
    props.color == "blue"
      ? WebSystemColor.buttonColorPrimary
      : WebSystemColor.buttonColorSecondary};

  @media (max-width: ${BreakPoints.mobile}) {
    width: 80%;
  }
`;
