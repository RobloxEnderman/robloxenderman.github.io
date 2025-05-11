import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GithubProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function GithubProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/robloxenderman/repos') // Replace with your GitHub username
      .then(response => response.json())
      .then(data => {
        setProjects(data);
      });
  }, []);

  return (
    <GithubProjectsContainer>
      <h1>My open source Github projects</h1>
      <p>
        This is a list of my open source github projects! These are 100% open
        source and easy to navigate!
      </p>
      <ProjectList>
        {projects.map(project => (
          <ProjectItem key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.description}</p>
          </ProjectItem>
        ))}
      </ProjectList>
    </GithubProjectsContainer>
  );
}

export default GithubProjects;