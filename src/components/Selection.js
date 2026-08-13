import React, { useState } from 'react';

const Selection = (props) => {
  const { applyColor, id } = props;
  const [style, updateSelectionStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      id={id}
      data-testid={id}
      style={style}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
