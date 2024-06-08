import {
  BsPersonWorkspaceIcon,
  CiLoginIcon,
  CiUserIcon,
  FaCartShoppingIcon,
  IoMenuOutlineIcon,
} from "../../../../main-styles";

interface IProps {
  iconName: string;
}

function ReturnIcon({ iconName }: IProps): JSX.Element {
  const iconMap: { [key: string]: JSX.Element } = {
    CiUserIcon: <CiUserIcon />,
    CiLoginIcon: <CiLoginIcon />,
    BsPersonWorkspaceIcon: <BsPersonWorkspaceIcon />,
    FaCartShoppingIcon: <FaCartShoppingIcon />,
    IoMenuOutlineIcon: <IoMenuOutlineIcon />,
  };

  return iconMap[iconName];
}

export default ReturnIcon;
