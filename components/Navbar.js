import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const NavButton = styled.button`
  margin: 0 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #eee;
  }
`;

function Navbar() {
  return (
    <NavBarContainer>
      <Link to="/"><NavButton>Home</NavButton></Link>
      <Link to="/github-projects"><NavButton>Github Projects</NavButton></Link>
      <Link to="/contact-me"><NavButton>Contact Me</NavButton></Link>
    </NavBarContainer>
  );
}

export default Navbar;