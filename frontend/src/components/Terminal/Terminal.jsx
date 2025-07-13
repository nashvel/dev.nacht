import React from 'react';
import { VscAdd, VscKebabVertical, VscChevronUp, VscClose, VscTerminal } from 'react-icons/vsc';
import './Terminal.css';

const Terminal = ({ onClose }) => {
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-tabs">
          <span className="terminal-tab">Problems</span>
          <span className="terminal-tab">Output</span>
          <span className="terminal-tab">Debug Console</span>
          <span className="terminal-tab active">Terminal</span>
          <span className="terminal-tab">Ports</span>
        </div>
        <div className="terminal-controls">
          <VscAdd />
          <VscKebabVertical />
          <VscChevronUp />
          <VscClose onClick={onClose} />
        </div>
      </div>
      <div className="terminal-body-container">
        <div className="terminal-main">
          <pre>
            <span className="prompt">user@portfolio:~$</span> <span className="command">contact --quick-response</span>
            <br />
            Initializing contact protocol...
            <br />
            Preferred contact method: Email at <a href="mailto:nash.backup21@gmail.com">nash.backup21@gmail.com</a>
            <br />
            Response time: Usually within 24-48 hours
            <br />
            Currently: Available for new opportunities
            <br />
            <br />
            Thank you for visiting my portfolio!
            <br />
            <span className="prompt">user@portfolio:~$</span> <span className="cursor"></span>
          </pre>
        </div>
        <div className="terminal-sidebar">
          <div className="terminal-session active">
            <VscTerminal />
            <span>bash</span>
          </div>
          <div className="terminal-session">
            <VscTerminal />
            <span>bash frontend</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
