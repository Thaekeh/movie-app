import React from "react";

const Header = (props) => {

  function handleClick(e) {
    e.preventDefault();
    console.log('Clicked')
  }

  return (
    <header className="app-header">
      <h2>{props.text}</h2>
      <h3 className="header-button" onClick={() => props.changeType('movie')}>Movie</h3>
      <h3 className="header-button" onClick={() => props.changeType('series')}>Serie</h3>
    </header>
  );
};

export default Header;