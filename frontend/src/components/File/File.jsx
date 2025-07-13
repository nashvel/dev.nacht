import React from 'react';
import { VscFilePdf, VscFileCode, VscMarkdown, VscJson } from 'react-icons/vsc';
import './File.css';

const File = ({ name, onFileClick, activeFile }) => {
  const getFileIconAndClass = () => {
    const extension = name.split('.').pop();
    switch (extension) {
      case 'pdf':
        return { icon: <VscFilePdf />, className: 'icon-pdf' };
      case 'tsx':
        return { icon: <VscFileCode />, className: 'icon-tsx' };
      case 'md':
        return { icon: <VscMarkdown />, className: 'icon-md' };
      case 'json':
        return { icon: <VscJson />, className: 'icon-json' };
      default:
        return { icon: <VscFileCode />, className: 'icon-default' };
    }
  };

  const { icon, className } = getFileIconAndClass();

  return (
    <div className={`file ${name === activeFile ? 'active' : ''}`} onClick={() => onFileClick(name)}>
      <span className={`file-icon ${className}`}>{icon}</span>
      <span className="file-name">{name}</span>
    </div>
  );
};


export default File;
