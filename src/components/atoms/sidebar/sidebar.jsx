import * as Styles from "./sidebar.styles.js";

// React component
const Sidebar = ({ className }) => {
  return (
    <Styles.Sidebar className={className}>
      <li>Home</li>
      <li>Werk</li>
      <li>Over</li>
      <li>Diensten</li>
      <li>Partners</li>
      <li>Stories</li>
      <li>Vacatures</li>
      <li>Events</li>
      <li>Contact</li>
    </Styles.Sidebar>
  );
};

export default Sidebar;
