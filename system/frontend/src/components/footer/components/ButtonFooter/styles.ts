import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  width: string;
  height: string;
  img: string;
  background?: string;
}

export const ContainerButton = styled(Link)<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: ${(props) =>
    props.background == undefined ? "none" : props.background};
  display: flex;
  border-radius: 5px;
`;
