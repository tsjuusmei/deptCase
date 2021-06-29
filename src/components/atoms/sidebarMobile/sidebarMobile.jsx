import * as Styles from "./sidebarMobile.styles.js";

// React component
const SidebarMobile = ({ className }) => {
  return (
    <Styles.SidebarMobile className={className}>
      <li>Home</li>
      <li>Werk</li>
      <li>Over</li>
      <li>Diensten</li>
      <li>Partners</li>
      <li>Stories</li>
      <li>Vacatures</li>
      <li>Events</li>
      <li>Contact</li>
    </Styles.SidebarMobile>
  );
};

export default SidebarMobile;
