import React from 'react';
import {
  VscMenu,
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscGear,
} from 'react-icons/vsc';
import './ActivityBar.css';

const ActivityBar = ({ onToggleSidebar }) => {
  return (
    <div className="activity-bar">
      <div className="activity-bar-top">
        <div className="icon sidebar-toggle" onClick={onToggleSidebar}>
          <VscMenu />
        </div>
        <div className="icon active">
          <VscFiles />
        </div>
        <div className="icon">
          <VscSearch />
        </div>
        <div className="icon">
          <VscSourceControl />
        </div>
        <div className="icon">
          <VscDebugAlt />
        </div>
        <div className="icon">
          <VscExtensions />
        </div>
      </div>
      <div className="activity-bar-bottom">
        <div className="icon">
          <VscAccount />
        </div>
        <div className="icon">
          <VscGear />
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
