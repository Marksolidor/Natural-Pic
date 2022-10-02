import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { data } = useContext(AppContext);
  return (
    <>
      <h2>FOTOS FAVORITAS</h2>
      <div className="container-imgs">
        {data
          .filter((z) => z.favorite === true)
          .map((item) => (
            <div
              className="card-container"
              key={item.id}
              style={{
                backgroundImage: `url(${item.src.tiny})`,
              }}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Favorites;
