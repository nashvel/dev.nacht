import React, { useState } from 'react';
import MenuBar from '../components/MenuBar/MenuBar';
import ActivityBar from '../components/ActivityBar/ActivityBar';
import Sidebar from '../components/Sidebar/Sidebar';
import Editor from '../components/Editor/Editor';
import Terminal from '../components/Terminal/Terminal';
import { VscSourceControl, VscSync, VscCheck, VscError, VscWarning, VscBell } from 'react-icons/vsc';
import './IDE.css';

const IDE = ({ isZoomedIn }) => {
  const [openFiles, setOpenFiles] = useState(['README.md']);
  const [activeFile, setActiveFile] = useState('README.md');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleTerminal = () => {
    setIsTerminalOpen(!isTerminalOpen);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleFileClick = (file) => {
    if (!openFiles.includes(file)) {
      setOpenFiles([...openFiles, file]);
    }
    setActiveFile(file);
  };

  const handleCloseTab = (fileToClose) => {
    const newOpenFiles = openFiles.filter(file => file !== fileToClose);
    setOpenFiles(newOpenFiles);

    if (activeFile === fileToClose) {
      if (newOpenFiles.length > 0) {
        setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFile(null);
      }
    }
  };

  const handleTabClick = (file) => {
    setActiveFile(file);
  };


  return (
    <div className="ide-container">
      <MenuBar onTerminalClick={handleToggleTerminal} />
      <div className="ide-main">
        <ActivityBar onToggleSidebar={handleToggleSidebar} />
        <Sidebar 
          onFileClick={handleFileClick} 
          activeFile={activeFile} 
          isZoomedIn={isZoomedIn} 
          isOpen={isSidebarOpen} 
        />
        <div className="main-content">
          <Editor
            tabs={openFiles}
            activeTab={activeFile}
            onTabClick={handleTabClick}
            onCloseTab={handleCloseTab}
          />
          {isTerminalOpen && <Terminal onClose={handleToggleTerminal} />}
        </div>
      </div>
      <div className="status-bar">
        <div className="status-bar-left">
          <VscSourceControl />
          <span>main</span>
          <VscSync />
          <span>
            <VscError /> 0
          </span>
          <span>
            <VscWarning /> 0
          </span>
        </div>
        <div className="status-bar-right">
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
          <span>UTF-8</span>
          <span>
            <VscCheck /> Prettier
          </span>
          <span>
            <VscBell />
          </span>
        </div>
      </div>
    </div>
  );
};


export default IDE;
