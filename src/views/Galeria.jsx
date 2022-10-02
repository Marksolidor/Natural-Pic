import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Heart from "../components/Heart";

const Galeria = () => {
  const { data, setData } = useContext(AppContext);
  const viewFunctions = (idIndex) => {
    setData((current) =>
      current.map((obj) => {
        if (obj.id === idIndex && obj.favorite === false) {
          return { ...obj, favorite: true };
        }
        if (obj.id === idIndex && obj.favorite === true) {
          return { ...obj, favorite: false };
        }
        return obj;
      })
    );
  };
  return (
    <>
      <h2>NATURAL PIC</h2>
      <div className="container-imgs">
        {data.map((item) => (
          <>
            <div
              className="card-container"
              key={item.id}
              style={{
                backgroundImage: `url(${item.src.tiny})`,
              }}
            >
              <div className="description">
                <p>{item.alt}</p>
              </div>
              <div className="heart" onClick={() => viewFunctions(item.id)}>
                <Heart filled={item.favorite} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Galeria;
