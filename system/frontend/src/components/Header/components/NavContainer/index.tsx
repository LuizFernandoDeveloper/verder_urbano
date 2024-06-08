import { LinkButtonNav } from "../LinkButton/styles";
import RenderLines from "../RenderLIne";
import ReturnIcon from "../ReturnIcon";
import { NavContainerHeader } from "./styles";
import {
  returnDescktopButtons,
  returnMobilesButtons,
} from "./Utils/ButtonList";

interface IProps {
  navType: "mobile" | "desktop";
  className: string;
}

interface IButton {
  buttonRoutes: string;
  bottomEdge: "true" | "false";
  width?: string;
  paddingButtonLink: string;
  hoverColor?: "true" | "false";
  children: string;
  buttonIcon?: string;
}

function NavContainer({ navType, className }: IProps): JSX.Element {
  const listButton: IButton[] =
    navType == "mobile" ? returnMobilesButtons() : returnDescktopButtons();

  return (
    <NavContainerHeader nav_type={navType} className={className}>
      {listButton.map((button) => {
        return (
          <LinkButtonNav
            to={button.buttonRoutes}
            bottom_edge={button.bottomEdge}
            width={button.width}
            padding_button_link={button.paddingButtonLink}
            hover_color={button.hoverColor}>
            <ReturnIcon
              iconName={button.buttonIcon == undefined ? "" : button.buttonIcon}
            />
            <RenderLines lines={button.children.split("<br/>")} />
          </LinkButtonNav>
        );
      })}
    </NavContainerHeader>
  );
}

export default NavContainer;
