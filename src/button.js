function Btn({ text, style, onClick }) {
  return (
    <button style={{ style }} onClick={onClick}>
      {text}
    </button>
  );
}

export default Btn;
