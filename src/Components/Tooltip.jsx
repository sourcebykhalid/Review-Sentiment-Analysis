// Tooltip.js
import { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      {showTooltip && (
        <span
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: "100%",
            left: "50%",
            transform: "translateX(-20%)",
            backgroundColor: "black",
            color: "#fff",
            padding: "4px",
            fontSize: "14px",
            borderRadius: "5px",
            whiteSpace: "wrap",
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
