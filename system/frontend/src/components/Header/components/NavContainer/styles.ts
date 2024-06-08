import styled from "styled-components";

interface INav {
  nav_type: "mobile" | "desktop";
}

export const NavContainerHeader = styled.nav<INav>`
  width: calc(100% - 20%);
  height: calc(100% - 20px);
  align-items: center;
  display: ${(props) => (props.nav_type === "mobile" ? "none" : "flex")};
  justify-content: space-around;
`;
