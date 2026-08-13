import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label, key } = config;
  return (
    <button
      className={classname}
      id={key}
      data-testid={key}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};

export default ColourSelector;
