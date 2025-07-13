import React from 'react';
import './MenuBar.css';

const MenuBar = ({ onTerminalClick }) => {
  const menuItems = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <div className="menu-bar">
      {menuItems.map(item => (
        <div 
          key={item} 
          className="menu-item"
          onClick={item === 'Terminal' ? onTerminalClick : null}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
