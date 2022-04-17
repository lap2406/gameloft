import { Fragment } from "react";
import "assets/styles/index.scss";
import Contact from "components/contact";
import ContactUs from "components/contact-us";
import Header from "components/header";
import Slider from "components/slider";
import Slick from "components/slick";

function App() {

  return (
    <Fragment>
      <Contact />
      <div className="flex flex-col min-h-screen">
        <Header />
        <Slider />
      </div>
      <ContactUs />
      <Slick />

    </Fragment>
  );
}

export default App;
