import React from 'react';
import { fileTree } from '../../data/fileTree';
import Folder from '../Folder/Folder';
import './Sidebar.css';

const Sidebar = ({ onFileClick, activeFile, isZoomedIn, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className={`sidebar-header ${isOpen ? 'open' : ''}`}>EXPLORER</div>
      <Folder 
        key={isZoomedIn ? 'zoomed' : 'default'}
        name={fileTree.name} 
        children={fileTree.children} 
        onFileClick={onFileClick} 
        activeFile={activeFile} 
      />
    </div>
  );
};


export default Sidebar;
