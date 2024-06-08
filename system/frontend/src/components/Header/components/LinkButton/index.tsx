import { LinkButtonNav } from "./styles";
interface IProps {
  buttonRoutes: string;
  bottomEdge: "true" | "false";
  width?: string;
  paddingButtonLink: string;
  hoverColor?: "true" | "false";
  children: string;
  buttonIcon: JSX.Element;
}

function LinkButton({
  children,
  buttonRoutes,
  bottomEdge,
  width,
  paddingButtonLink,
  hoverColor,
  buttonIcon,
}: IProps): JSX.Element {
  return (
    <LinkButtonNav
      to={buttonRoutes}
      bottom_edge={bottomEdge}
      width={width}
      padding_button_link={paddingButtonLink}
      hover_color={hoverColor}>
      {buttonIcon}
      {children}
    </LinkButtonNav>
  );
}

export default LinkButton;
