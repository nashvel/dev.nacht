import React, { useState } from 'react';
import { VscFolder, VscFolderOpened } from 'react-icons/vsc';
import File from '../File/File';
import './Folder.css';

const Folder = ({ name, children, onFileClick, activeFile }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="folder">
      <div className="folder-header" onClick={handleToggle}>
        <span className={`chevron ${isOpen ? 'open' : ''}`}>›</span>
        <span className="folder-icon">
          {isOpen ? <VscFolderOpened /> : <VscFolder />}
        </span>
        <span className="folder-name">{name}</span>
      </div>
      {isOpen && (
        <div className="folder-content">
          {children.map(item => (
            item.isFolder ? (
              <Folder key={item.name} name={item.name} children={item.children} onFileClick={onFileClick} activeFile={activeFile} />
            ) : (
              <File key={item.name} name={item.name} onFileClick={onFileClick} activeFile={activeFile} />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
