import React from "react";
import cstyles from "./Topbar.module.css";

const Topbar = () => {
  return (
    <div className={cstyles.topbar}>
      <div>
        <div className={cstyles.topbarAdd}>
          <i class="bi bi-geo-alt-fill"></i>
          <label>NewTown, Kolkata</label>
        </div>
        <div className={cstyles.topbarPhone}>
          <i class="bi bi-phone-fill"></i>
          <label>+91 1234567890</label>
        </div>
        <div className={cstyles.topbarMail}>
          <a href="mailto:eat@sosouthy.com">eat@sosouthy.com</a>
        </div>
      </div>
      <div>
        <div className={cstyles.topbarSocial}>
          <a href="https://www.facebook.com/sosouthykolkata/">
            <i class="bi bi-facebook"></i>
          </a>
        </div>
        <div className={cstyles.topbarSocial}>
          <a href="https://www.facebook.com/sosouthykolkata/">
            <i class="bi bi-instagram"></i>
          </a>
        </div>
        <div className={cstyles.topbarSocial}>
          <a href="https://www.facebook.com/sosouthykolkata/">
            <i class="bi bi-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
