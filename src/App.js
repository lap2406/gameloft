import { Fragment } from "react";
import "assets/styles/index.scss";
import Contact from "components/contact";
import Newsletter from "components/newsletter";
import Header from "components/header";
import Slider from "components/slider";
import Post from "components/post";
import Event from "components/event";
import Content from "components/content";
import Footer from "components/footer";

function App() {

  return (
    <Fragment>
      <Contact />
      <div className="relative w-full">
        <Header />
        <Slider />
      </div>
      <Newsletter />
      <Post />
      <Event />
      <Content />
      <Footer />

    </Fragment>
  );
}

export default App;
