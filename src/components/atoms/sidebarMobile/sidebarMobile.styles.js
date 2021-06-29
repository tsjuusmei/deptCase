import styled from "styled-components";

export const SidebarMobile = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  left: 100%;
  width: 100vw;
  height: 100vh;
  background-color: black;
  padding: 4em 20px;
  z-index: -1;
  transition: 0.5s ease-in-out;
  li {
    list-style-type: none;
    font-family: "Teko";
    font-size: calc(3em);
    color: white;
    width: calc(100% - 40px);
    text-align: right;
    line-height: 1.2em;
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
    left: 0;
    opacity: 1;
    transition: 0.5s ease-in-out;
  }
`;
