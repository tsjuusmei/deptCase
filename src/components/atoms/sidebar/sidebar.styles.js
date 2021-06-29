import styled from "styled-components";

export const Sidebar = styled.div`
  position: absolute;
  left: -120px;
  top: -100vh;
  opacity: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding: 10em 120px 1em;
  z-index: -1;
  transition: 0.5s ease-in-out;
  li {
    list-style-type: none;
    font-family: "Teko";
    font-size: 5.5em;
    color: white;
    width: calc(100% - 240px);
    text-align: right;
    line-height: 1em;
    border-bottom: 2px solid #a3a3a3;
    &:first-of-type::marker {
      content: " ▶ ";
      font-size: 0.6em;
    }
    &:last-of-type {
      border: none;
    }
  }

  &.show {
    top: -48px;
    opacity: 1;
    transition: 0.5s ease-in-out;
  }
`;
