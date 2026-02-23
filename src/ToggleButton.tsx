type Props = {
  handleClick: () => void;
  text: string;
  isActive: boolean;
};

export function ToggleButton({ handleClick, text, isActive }: Props) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isActive
          ? "hsl(202, 68%, 40%)"
          : "hsla(0, 0%, 100%, .2)",
        color: isActive ? "hsla(0, 100%, 0%, .7)" : "hsla(0, 0%, 100%, .7)",
        width: "12rem",
        height: "6rem",
        borderRadius: "20px",
        margin: "1rem",
      }}
    >
      {text}
    </button>
  );
}
