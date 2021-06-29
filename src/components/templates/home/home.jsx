import Media from "react-media";
import { device } from "styles/devices";
import { HomeMobile, Home } from "components/organisms/index";

// React component
const HomePage = () => {
  return (
    <>
      <Media
        queries={{
          small: device.mobile,
          large: device.tablet,
        }}
      >
        {(matches) => (
          <>
            {matches.small && <HomeMobile />}
            {matches.large && <Home />}
          </>
        )}
      </Media>
    </>
  );
};

export default HomePage;
