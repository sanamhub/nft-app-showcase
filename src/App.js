import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Nifty NFTs. Start Selling and Growing"
        description="Buy, Store, Collect NFTs, Exchange and earn crypto. Join 25+ million people using ProNef marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a butterfly UI of ProNet NFT Marketplace. Smooth constant colors of a fluent UI design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo, which runs natively on all users devices. You can easily get your app into peoples hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen list all NFTs while the second one shows the details of the specific NFF with added search functionality on home screen"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by {""}
          <span className="font-bold">Sanam</span>
        </p>
      </div>
    </>
  );
};

export default App;
