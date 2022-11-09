import "./Container.css";
import desktopImg from "../../images/image-hero-desktop.png";
import mobileImg from "../../images/image-hero-mobile.png";
import databiz from "../../images/client-databiz.svg";
import audio from "../../images/client-audiophile.svg";
import meet from "../../images/client-meet.svg";
import maker from "../../images/client-maker.svg";
export const Container = () => {
  return (
    <div className="container">
      <div className="mobile-img">
        <img src={mobileImg} alt="" />
      </div>
      <div className="text">
        <div className="inner-div">
          <h1>Make Remote Work</h1>
          <p>
            Get Your team in sync, no matter your location. Steamline processes.
            create team rituals, and watch productivity soar
          </p>
          <button className="learn-button">Learn more</button>
          <div className="logos">
            <img src={databiz} alt="" />
            <img src={audio} alt="" />
            <img src={meet} alt="" />
            <img src={maker} alt="" />
          </div>
        </div>
      </div>
      <div className="desktop-img">
        <img src={desktopImg} alt="" />
      </div>
    </div>
  );
};
