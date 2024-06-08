interface IButton {
  buttonRoutes: string;
  bottomEdge: "true" | "false";
  width?: string;
  paddingButtonLink: string;
  hoverColor?: "true" | "false";
  children: string;
  buttonIcon?:
    | "BsPersonWorkspaceIcon"
    | "CiLoginIcon"
    | "CiUserIcon"
    | "FaCartShoppingIcon"
    | "IoMenuOutlineIcon"
    | "";
  buttonFunction?: () => boolean;
}

//////////////////////////////return Descktop Buttons ///////////////////////////

export function returnDescktopButtons(): IButton[] {
  const HOME_BUTTON: IButton = {
    buttonRoutes: "/",
    bottomEdge: "true",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: "Home",
  };

  const FISH_BUTTON: IButton = {
    buttonRoutes: "/fish",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: "Peixes",
  };

  const VEGETABLES_BUTTON: IButton = {
    buttonRoutes: "/vegetables",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: "Vegetais",
  };

  const CONTACT_BUTTON: IButton = {
    buttonRoutes: "/contact",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: "Contatos",
  };

  const LOGIN_BUTTON: IButton = {
    buttonRoutes: "/login",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: `Faça Login ou  <br/> crie uma conta`,
    buttonIcon: "CiUserIcon",
  };

  const WORKSPACE_BUTTON: IButton = {
    buttonRoutes: "/workspace",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: `Entre no seu <br/> workspace`,
    buttonIcon: "BsPersonWorkspaceIcon",
  };

  const CART_BUTTON: IButton = {
    buttonRoutes: "/contact",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "true",
    children: "",
    buttonIcon: "FaCartShoppingIcon",
  };

  const listButton: IButton[] = [
    HOME_BUTTON,
    FISH_BUTTON,
    VEGETABLES_BUTTON,
    CONTACT_BUTTON,
    LOGIN_BUTTON,
    WORKSPACE_BUTTON,
    CART_BUTTON,
  ];

  return listButton;
}

//////////////////////////////return Descktop Buttons ///////////////////////////

//////////////////////////////return mobile Buttons ///////////////////////////

export function returnMobilesButtons(): IButton[] {
  const MENU_BUTTON: IButton = {
    buttonRoutes: "",
    bottomEdge: "false",
    width: "",
    paddingButtonLink: "",
    hoverColor: "false",
    children: "",
    buttonIcon: "IoMenuOutlineIcon",
  };

  const listMobileButtons: IButton[] = [MENU_BUTTON];

  return listMobileButtons;
}

//////////////////////////////return mobile Buttons ///////////////////////////
