import { Fragment, useEffect, useState } from "react";
import "assets/styles/index.scss";
import Contact from "components/contact";
import Newsletter from "components/newsletter";
import Header from "components/header";
import Slider from "components/slider";
import Post from "components/post";
import Event from "components/event";
import Content from "components/content";
import Footer from "components/footer";
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])
  if (width < 640) {
    return (

      <Fragment>
        <Contact />
        <div className="scroll-container">
          <div className="relative w-full">
            <Header />
            <Slider />
          </div>
          <Newsletter />
          <Post />
          <Event />
          <Content />
          <Footer />
        </div>
      </Fragment>
    )
  }
  else {
    return (

      //   <Contact />
      //   <div className="scroll-container">
      //     <div className="relative w-full">
      //       <Header />
      //       <Slider />
      //     </div>
      //     <Newsletter />
      //     <Post />
      //     <Event />
      //     <Content />
      //     <Footer />
      //   </div>

      <Fragment>
        <Header />
        <Contact />
        <ReactFullpage
          scrollingSpeed={1000}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <div className="relative w-full">
                    <Slider />
                  </div>
                </div>
                <div className="section">
                  <Newsletter />
                </div>
                <div className="section">
                  <Post />
                </div>
                <div className="section">
                  <Event />
                </div>
                <div className="section">
                  <Content />
                </div>
                <div className="section">
                  <Footer />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Fragment>
    );
  }

}

export default App;
