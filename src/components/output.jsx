// Output component to display the results of the code execution
import { Label } from "@/components/ui/label";

const outputStyle = {
    height: "50%",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #ddd",
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
}

const textStyle = {
    whiteSpace: "pre-wrap", // Preserve whitespace and line breaks
    wordBreak: "break-all", // Break long words to prevent overflow
    textAlign: "left",
    fontFamily: "Consolas",
    fontSize: 15,
};
function Output({ output }) {
  return (
      <div style={outputStyle}>
        <Label>Output: </Label>
        <div style={textStyle}>
            {output}
        </div>
    </div>
  );
}

export default Output;