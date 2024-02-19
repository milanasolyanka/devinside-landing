import Header from "components/Header";
import Footer from "components/Footer";
import Divider from "components/Divider";
import WelcomePage from "pages/WelcomePage";
import AboutUsPage from "pages/AboutUsPage";
import TechnologyPage from "pages/TechnologyPage";
import ProductPage from "pages/ProductPage";
import ServicesPage from "pages/ServicesPage";
import ContactPage from "pages/ContactPage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="parallax-wrapper">
        <WelcomePage></WelcomePage>
        <AboutUsPage></AboutUsPage>
        <Divider></Divider>
        <TechnologyPage></TechnologyPage>
        <Divider></Divider>
        <ProductPage></ProductPage>
        <Divider></Divider>
        <ServicesPage></ServicesPage>
        <Divider></Divider>
        <ContactPage></ContactPage>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
