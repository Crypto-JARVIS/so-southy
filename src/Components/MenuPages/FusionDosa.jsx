import React from "react";
import FusionDosaMenu from "../../MenuJson/FusionDosa.json";
import cstyles from "./FusionDosa.module.css";

const FusionDosa = () => {
  return (
    <div className={cstyles.fusionDosa}>
      <h5>FUSION DOSA</h5>
      {FusionDosaMenu.FUSIONDOSA.map((fusiondosa) => {
        return (
          <div key={fusiondosa.id} className={cstyles.fusionDosaMenu}>
            <div>
              {fusiondosa.Name}
              <div className={cstyles.fusionDosaPrice}>{fusiondosa.Price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FusionDosa;
