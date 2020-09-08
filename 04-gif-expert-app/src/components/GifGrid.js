//componenet para obtener valor de la lista
//`=96

import React from "react";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //const [count, setCount] = useState(0);
  const { data: images, loading } = useFetchGifs(category);
  console.log(loading);

  //getGits();
  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Cargando</p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
