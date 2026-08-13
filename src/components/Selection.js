import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor } = props;
  const [style, setStyle] = useState({ background: "" });

  const updateSelectionStyle = (nextBackground) => {
    if (typeof nextBackground === 'string') {
      setStyle({ background: nextBackground });
    } else if (nextBackground && typeof nextBackground === 'object') {
      if (nextBackground.background !== undefined) {
        setStyle({ background: nextBackground.background });
      } else {
        setStyle(nextBackground);
      }
    }
  };

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor && applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
