type Props = {
  handleClick: () => void;
  text: string;
};

export function IncreaseDecreaseMax({ handleClick, text }: Props) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#78AB21",
        color: "hsla(0, 100%, 0%, .7)",
        width: "6rem",
        height: "6rem",
        margin: "2rem",
      }}
    >
      {text}
    </button>
  );
}
