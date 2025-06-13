import { Textarea } from "./ui/textarea";

function InputBox({ value, onChange }) {
  const inputBoxStyle = {
    height: "20vh",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #ddd",
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    overflowY: "auto",
  };

  return (
    <div style={inputBoxStyle}>
      <Textarea
        placeholder="Enter input here..."
        value={value}
        onChange={onChange}
        className="w-full h-full bg-transparent border-none focus:ring-0 focus:outline-none"
      />
    </div>
  );
}

export default InputBox;