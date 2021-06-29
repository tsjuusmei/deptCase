// React & Module Imports
import * as Styles from "./menuButtonMobile.styles.js";

// React  Component
const MenuButtonMobile = ({ _callback }) => {
  return (
    <Styles.MenuButtonMobile>
      <div className="menu-icon" onClick={_callback}>
        <input className="menu-icon__cheeckbox" type="checkbox" />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </Styles.MenuButtonMobile>
  );
};
export default MenuButtonMobile;
