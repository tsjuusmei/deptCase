import * as Styles from "./mobileArticle.styles.js";

// React component
const MobileArticle = ({ imageSrc, client, projectName }) => {
  return (
    <Styles.MobileArticle>
      <img src={imageSrc} alt={projectName} />
      <h3>{client}</h3>
      <h2>{projectName}</h2>
    </Styles.MobileArticle>
  );
};

export default MobileArticle;
