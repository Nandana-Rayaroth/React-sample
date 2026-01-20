import React, { useState } from 'react'

export default function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor="#1f09cd",
  expanded = false,
  className,
  children
}) 
{

    const [isExpanded, setIsExpanded] = useState(expanded)
    const displayText = isExpanded ? children : children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."
    const btnStyle = {
        border : "none",
        baground : "none",
        color : buttonColor,
        cursor: "pointer",
        marginLeft : "6px"
    }
  return (
    <div className={className}>
      {displayText}
      <button onClick={() => setIsExpanded((exp) => !exp)} style={btnStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
