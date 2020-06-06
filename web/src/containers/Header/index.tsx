import React from 'react';

interface HeaderProps {
  title: string;
}

// Header é do tipo FC (Function Component)
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>

  );
}

export default Header;

// FC é um generic