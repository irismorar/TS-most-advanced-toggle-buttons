type Props = {
  handleClick: () => void;
  text: string;
};

export function IncreaseDecreaseMax({ handleClick, text }: Props) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "rgb(19, 81, 24)",
        color: "hsla(0, 0%, 100%, .7)",
        width: "6rem",
        height: "6rem",
        margin: "2rem",
      }}
    >
      {text}
    </button>
  );
}
