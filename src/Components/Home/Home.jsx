import React from "react";
import cstyles from "./Home.module.css";
import Brand from "./Brand";
import AboutUs from "./AboutUs";
import BestSelling from "./BestSelling";
import Menu from "./Menu";

const Home = () => {
  return (
    <React.Fragment>
      <Brand/>
      <AboutUs/>
      <BestSelling/>
      <Menu/>
      {/* <div className={cstyles.founder}>
        <div className={cstyles.founderDesc}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={cstyles.founderName}>
          <h1>ASHISH</h1>
          <h1>BHAIYA</h1>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Home;
