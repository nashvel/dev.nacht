import React from 'react';
import './Window.css';

const Window = ({ children, title }) => {
  return (
    <div className="window">
      <div className="title-bar">
        <div className="controls">
          <div className="control red"></div>
          <div className="control yellow"></div>
          <div className="control green"></div>
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Window;
