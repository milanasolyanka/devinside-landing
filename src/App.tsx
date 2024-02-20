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
        <Divider id="about"></Divider>
        <AboutUsPage></AboutUsPage>
        <Divider id="techs"></Divider>
        <TechnologyPage></TechnologyPage>
        <Divider id="product"></Divider>
        <ProductPage></ProductPage>
        <Divider id="services"></Divider>
        <ServicesPage></ServicesPage>
        <Divider id="form"></Divider>
        <ContactPage></ContactPage>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
