import { Label } from "@/components/ui/label";
import React from "react";

const dryrunStyle = {
    height: "50%",
    width: "100%",
    borderRadius: "10px",
    border: "2px solid #ddd",
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.1)",
    padding: "10px",
}
function Dryrun() {
  return (
    <div style={dryrunStyle}>
       <Label>Dry Run Table</Label>
    </div>
  );
}

export default Dryrun;