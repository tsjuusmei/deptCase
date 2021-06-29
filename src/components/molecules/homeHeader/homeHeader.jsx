import { Icons, MenuButton, Sidebar } from "components/atoms/index";
import { useEffect, useState } from "react";
import * as Styles from "./homeHeader.styles.js";

// React component
const HomeHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  let navbarClasses = [];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleSidebar = async () => {
    setShowSidebar((showSidebar) => !showSidebar);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Styles.HomeHeader>
      <header className={navbarClasses.join(" ")}>
        <Icons type="logo" width="100px" />
        <MenuButton _callback={toggleSidebar} />
        <Sidebar className={showSidebar ? "show" : ""} />
      </header>

      <h1>WORK</h1>

      <button>View case</button>
    </Styles.HomeHeader>
  );
};

export default HomeHeader;
