import img1 from "../../img/banner-1.jpg";
import img2 from "../../img/banner-2.jpg";

import "./Carrusel.css";

const Carrusel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide shadow"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 carrusel-img" src={img1} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carrusel-img" src={img2} />
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
