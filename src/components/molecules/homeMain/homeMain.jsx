import * as Styles from "./homeMain.styles.js";
import { Article } from "components/atoms/index";

// React component
const HomeMain = () => {
  return (
    <Styles.HomeMain>
      <Article
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/178385/bol.com-featured-585x585-c.png"
        client="bol.com"
        projectName="Een unieke 3D-belevingswereld voor bol.com"
      />
      <Article
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/177951/featured-ENGIE-585x585-c.png"
        client="Engie"
        projectName="Een splinternieuw Sitecore platform"
      />
      <Article
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/177494/featured-avans-585x585-c.png"
        client="Avans"
        projectName="Een digitale hervorming voor Avans Hogeschool"
      />
      <Article
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/176687/ultimaker-featured-image-585x585-c.png"
        client="Ultimaker"
        projectName="Meer sales qualified leads met een customer journey aanpak"
      />
    </Styles.HomeMain>
  );
};

export default HomeMain;
