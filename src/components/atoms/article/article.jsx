import * as Styles from "./article.styles.js";

// React component
const Article = ({ imageSrc, client, projectName }) => {
  return (
    <Styles.Article>
      <img src={imageSrc} alt={projectName} />
      <h3>{client}</h3>
      <h2>{projectName}</h2>
    </Styles.Article>
  );
};

export default Article;
