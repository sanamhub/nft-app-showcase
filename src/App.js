import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and Growing"
        description="Buy, Store, Collect NFTs, Exchange and earn crypto. Join 25+ million people using ProNef marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a butterfly UI of ProNet NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
    </>
  );
};

export default App;
