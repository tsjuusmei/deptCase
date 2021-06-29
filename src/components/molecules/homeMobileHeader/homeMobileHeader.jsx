import { Icons, MenuButtonMobile, SidebarMobile } from "components/atoms/index";
import { useEffect, useState } from "react";
import * as Styles from "./homeMobileHeader.styles.js";

// React component
const HomeMobileHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showSidebarMobile, setShowSidebarMobile] = useState(false);
  let navbarClasses = [];

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleSidebarMobile = async () => {
    setShowSidebarMobile((showSidebarMobile) => !showSidebarMobile);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  return (
    <Styles.HomeMobileHeader>
      <header className={navbarClasses.join(" ")}>
        <Icons type="logo" width="50px" />
        <MenuButtonMobile _callback={toggleSidebarMobile} />
        <SidebarMobile className={showSidebarMobile ? "show" : ""} />
      </header>

      <h1>WORK</h1>
    </Styles.HomeMobileHeader>
  );
};

export default HomeMobileHeader;
