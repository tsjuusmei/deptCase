import styled from "styled-components";

export const HomeMobileHeader = styled.section`
  background: url("https://www.deptagency.com/wp-content/uploads/fly-images/149837/cxux-480x300-c.jpg");
  background-size: cover;
  height: 65vh;

  header {
    position: fixed;
    display: flex;
    width: calc(100% - 36px);
    padding: 20px 18px;
    justify-content: space-between;
    transition: background 0.5s;
  }

  h1 {
    padding: 1em 0 0 18px;
  }

  .scrolled {
    background-color: white;
    transition: 0.5s ease-in-out;
  }
`;
