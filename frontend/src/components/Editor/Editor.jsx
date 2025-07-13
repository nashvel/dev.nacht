import React from 'react';
import AboutMe from '../../content/AboutMe';
import { VscClose, VscFilePdf, VscFileCode, VscMarkdown, VscJson } from 'react-icons/vsc';
import './Editor.css';

const Editor = ({ tabs, activeTab, onTabClick, onCloseTab }) => {
  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop();
    switch (extension) {
      case 'pdf':
        return <VscFilePdf />;
      case 'tsx':
        return <VscFileCode />;
      case 'md':
        return <VscMarkdown />;
      case 'json':
        return <VscJson />;
      default:
        return <VscFileCode />;
    }
  };

  const renderContent = () => {
    if (!activeTab) {
      return (
        <div className="editor-placeholder">
          <h2>Select a file to get started</h2>
        </div>
      );
    }

    switch (activeTab) {
      case 'README.md':
        return <AboutMe />;
      default:
        return (
          <div className="editor-placeholder">
            <h2>{`Content for ${activeTab} goes here`}</h2>
          </div>
        );
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-tabs">
        {tabs.map(file => (
          <div
            key={file}
            className={`editor-tab ${file === activeTab ? 'active' : ''}`}
            onClick={() => onTabClick(file)}
          >
            <span className="tab-icon">{getFileIcon(file)}</span>
            <span className="tab-name">{file}</span>
            <span
              className="close-tab-icon"
              onClick={(e) => {
                e.stopPropagation(); // Prevent tab click when closing
                onCloseTab(file);
              }}
            >
              <VscClose />
            </span>
          </div>
        ))}
      </div>
      <div className="editor-content">
        {renderContent()}
      </div>
    </div>
  );
};


export default Editor;
