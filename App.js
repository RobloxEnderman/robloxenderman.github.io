import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GithubProjects from './components/GithubProjects';
import ContactMe from './components/ContactMe';
import GlobalStyle from './styles/GlobalStyles';

import { css } from 'styled-components';

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  ${(props) => css`
    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;

function Home() {
  return (
    <MainContent>
      <h1>Welcome to my website!</h1>
      <p>This website has all of my best Github / Open Source projects, and even some games!</p>
    </MainContent>
  );
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/github-projects">
            <GithubProjects />
          </Route>
          <Route path="/contact-me">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;