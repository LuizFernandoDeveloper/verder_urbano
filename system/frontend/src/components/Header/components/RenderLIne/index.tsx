interface IProps {
  lines: string[];
}

function RenderLines({ lines }: IProps): JSX.Element {
  return lines.length == 1 ? (
    <span>{lines[0]}</span>
  ) : (
    <p>
      {lines.map((line, index) => {
        return (
          <>
            {line} {index < lines.length - 1 ? <br /> : ""}
          </>
        );
      })}
    </p>
  );
}

export default RenderLines;
