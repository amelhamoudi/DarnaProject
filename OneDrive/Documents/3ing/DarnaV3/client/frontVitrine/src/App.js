import logo from "./logo.svg";
import "./App.css";
import SocialContact from "./Component/Header/SocialContact";
import Header from "./Component/Header/Header";
import Nav from "./Component/Header/SlidePage";
import AboutUs from "./Component/AboutUs.js/AboutUs";
import ProductPage from "./Component/ProductDerive/ProductPage";
import FactQst from "./Component/Contact/FactQst";
import Footer from "./Component/Footer/Footer";
import SponsorPage from "./Component/Sponsor/SponsorPage";
import HelpPage from "./Component/Help/HelpPage";

import store from "./store";
import { Provider } from "react-redux";
import ContactPage from "./Component/Contact/ContactPage";
import ObjectifPage from "./Component/Objectif/ObjectifPage";
import TeamPage from "./Component/Team/TeamPage";
import ActionPage from "./Component/Actions/ActionPage";
import DetailPage from "./Component/Actions/DetailAction/DetailPage";
import TestTwo from "./Component/Testtwo";
import SlidePage from "./Component/Header/SlidePage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SocialContact></SocialContact>
        <Header></Header>
        <SlidePage></SlidePage>
        <AboutUs></AboutUs>
        <ObjectifPage></ObjectifPage>

        <ProductPage></ProductPage>
        <HelpPage></HelpPage>
        <TeamPage></TeamPage>

        <SponsorPage></SponsorPage>
        <ContactPage></ContactPage>
        <ActionPage></ActionPage>

       

        <Footer></Footer>

        {/*         

         */}
      </div>
    </Provider>
  );
}

export default App;
