import { HomeContainer } from "./home.styles.ts";
import { Banner } from "../../components/banner/banner.tsx";
import { WelcomeText } from "../../components/welcome-text/welcome-text.tsx";

export const Home = () => {
  return (
    <HomeContainer>
      <Banner/>
      <WelcomeText/>
    </HomeContainer>
  );
};
