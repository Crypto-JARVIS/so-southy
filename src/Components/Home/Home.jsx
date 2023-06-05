import React from "react";
import cstyles from "./Home.module.css";
import food1 from "../../Images/idli.jpeg"

const Home = () => {
  return (
    <React.Fragment>
      <div className={cstyles.brand}>
        <div className={cstyles.brandName}>
            <h1>SO</h1>
            <h1>SOUTHY</h1>
        </div>
        <div className={cstyles.brandDesc}>
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
      </div>
      <div className={cstyles.bg}>
        <h1 className={cstyles.bsph}> OUR BEST SELLING PRODUCTS </h1>
        <div className={cstyles.card}>
          <img src={food1} alt="idli" className={cstyles.cardImg}/>
          <div className={cstyles.cardDesc}>
            <h4><b>IDLI</b></h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
          </div>
        </div>
        <div className={cstyles.card}>
          <img src={food1} alt="idli" className={cstyles.cardImg}/>
          <div className={cstyles.cardDesc}>
            <h4><b>IDLI</b></h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
          </div>
        </div>
        <div className={cstyles.card}>
          <img src={food1} alt="idli" className={cstyles.cardImg}/>
          <div className={cstyles.cardDesc}>
            <h4><b>IDLI</b></h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.</p>
          </div>
        </div>
      </div>
      <div className={cstyles.founder}>
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
      </div>
    </React.Fragment>
  );
};

export default Home;
