// React & Module Imports
import * as Styles from "./menuButton.styles.js";

// React  Component
const MenuButton = ({ _callback }) => {
  return (
    <Styles.MenuButton>
      <div className="menu-icon" onClick={_callback}>
        <input className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </Styles.MenuButton>
  );
};
export default MenuButton;
