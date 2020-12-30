import React from "react";

const Header = (props) => {

  return (
    <header className="app-header">
      <h2>{props.text}</h2>
      <h4 className="header-button" onClick={() => props.changeType('movie')}>Movie</h4>
      <h4 className="header-button" onClick={() => props.changeType('series')}>Serie</h4>
      <h4 className="header-button" onClick={() => props.changeType('all')}>All</h4>
    </header>
  );
};

export default Header;