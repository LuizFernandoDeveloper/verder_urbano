import ButtonFooter from "../ButtonFooter";
import { ContainerNavStack } from "./styles";

type stackType = {
  img: string;
  nameStack: string;
  url: string;
  target: "_self" | "_blank" | "_parent" | "_top";
  background?: string;
};

interface Prosp {
  list: stackType[];
}

function NavStack({ list }: Prosp): JSX.Element {
  return (
    <ContainerNavStack>
      {list.map((stack) => {
        return (
          <ButtonFooter
            url={stack.url}
            target={stack.target}
            img={stack.img}
            width="45px"
            height="45px"
            background={stack.background}>
            {stack.nameStack}
          </ButtonFooter>
        );
      })}
    </ContainerNavStack>
  );
}

export default NavStack;
