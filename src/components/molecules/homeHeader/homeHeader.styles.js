import styled from "styled-components";

export const HomeHeader = styled.section`
  background: url("https://www.deptagency.com/wp-content/uploads/fly-images/149837/cxux-480x300-c.jpg");
  background-size: cover;
  height: 100vh;

  header {
    position: fixed;
    display: flex;
    width: calc(100% - 240px);
    padding: 24px 120px;
    justify-content: space-between;
    transition: background 0.5s;
    border-bottom: 1px solid black;
  }

  h1 {
    padding: 120px 120px 0;
    font-size: 30em;
    line-height: 1.2em;
  }

  button {
    margin: 0 0 0 calc(100vw - 290px);
    display: flex;
    justify-content: center;
    padding: 1em 0;
    width: 170px;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    background-color: black;
    color: white;
    margin-top: 1em;
  }

  .scrolled {
    background-color: white;
    transition: 0.5s ease-in-out;
  }
`;
