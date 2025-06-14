// Output component to display the results of the code execution
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const outputStyle = {
    height: "50%",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #ddd",
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
}

const textStyle = {
    whiteSpace: "pre-wrap", 
    wordBreak: "break-all", 
    textAlign: "left",
    fontFamily: "Consolas",
    fontSize: 15,
};

function Output({ output, progess }) {
  return (
      <div style={outputStyle}>
        <Label>Output</Label>
        <Progress value={progess} className="bg-gray-200 mt-2 mb-4" />
        <div style={textStyle}>
            {output}
        </div>
    </div>
  );
}

export default Output;