import * as Styles from "./homeMobileMain.styles.js";
import { MobileArticle } from "components/atoms/index";

// React component
const HomeMobileMain = () => {
  return (
    <Styles.HomeMobileMain>
      <button>View case</button>
      <MobileArticle
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/178385/bol.com-featured-585x585-c.png"
        client="bol.com"
        projectName="Een unieke 3D-belevingswereld voor bol.com"
      />
      <MobileArticle
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/177951/featured-ENGIE-585x585-c.png"
        client="Engie"
        projectName="Een splinternieuw Sitecore platform"
      />
      <MobileArticle
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/177494/featured-avans-585x585-c.png"
        client="Avans"
        projectName="Een digitale hervorming voor Avans Hogeschool"
      />
      <MobileArticle
        imageSrc="https://www.deptagency.com/wp-content/uploads/fly-images/176687/ultimaker-featured-image-585x585-c.png"
        client="Ultimaker"
        projectName="Meer sales qualified leads met een customer journey aanpak"
      />
    </Styles.HomeMobileMain>
  );
};

export default HomeMobileMain;
