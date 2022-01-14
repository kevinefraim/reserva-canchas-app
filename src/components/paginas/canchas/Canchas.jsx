import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../store/appContext";
import Cancha from "../../cancha/Cancha";
import Loader from "../../loader/Loader";
import "./Canchas.css";

const Canchas = () => {
  const { id } = useParams();
  const { getInfo, info } = useContext(Context);

  useEffect(() => {
    getInfo(`https://apipdtc.herokuapp.com/${id}`);
  }, [id]);

  return (
    <main>
      <div className="container mt-5">
        <div className="title-container">
          <h1 className="text-center m-2 title-canchas">Canchas de {id}</h1>
        </div>

        <div className="cards-container mt-4">
          {info.length > 0 ? (
            info.map((cancha) => <Cancha key={cancha.id} {...cancha}></Cancha>)
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </main>
  );
};

export default Canchas;
