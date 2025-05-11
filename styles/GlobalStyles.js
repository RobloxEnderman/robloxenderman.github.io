import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
  }

  input[type="text"],
  input[type="email"],
  textarea {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

export default GlobalStyle;