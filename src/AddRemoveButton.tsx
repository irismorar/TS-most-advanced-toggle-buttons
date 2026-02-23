type Props = {
  handleClick: () => void;
  text: string;
};

export function AddRemoveButton({ handleClick, text }: Props) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "hsla(52, 68%, 40%, 1)",
        color: "hsla(0, 100%, 0%, .5)",
        width: "6rem",
        height: "6rem",
        margin: ".3rem",
      }}
    >
      {text}
    </button>
  );
}
