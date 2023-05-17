import { useEffect, useState } from "react";
//import { getGifs } from "./helpers/getGifs"
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

 const { images,isLoading } = useFetchGifs(category) 
  
  return (
    <>
    <h3>{category}</h3>
    {
      // isLoading 
      // ? (<h2 >Cargando...</h2>)
      // : null
      isLoading && (<h2 >Cargando...</h2>) //Si isLoading es true, entonces muestra el h2, si es false no muestra nada
    }
    

    <div className="card-grid">
      {
        images.map((img) => (
          <GifItem 
          key = {img.id}
          {...img  }
          />
          
        ))
        }
      

    </div>
    
    
    </>
  )
}
