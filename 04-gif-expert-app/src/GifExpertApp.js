//rafc
//desabilitar jshint
import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai x", "Dragon Ball"];
  const [categories, setcategories] = useState([
    "One Punch",
    //"Samurai x",
    //"Dragon Ball",
  ]);

  /*const handleAdd = () => {
    //'HunterXHunter'
    //categories.push("HunterXHunter");  nop
    //setcategories("HunterXHunter"); nop

    //setcategories([...categories, "HunterXHunter"]); // sip se parace al setState xd
    setcategories((cats) => [...cats, "HunterXHunter"]); //sip forma2
    console.log(categories);
  };*/
  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setcategories={setcategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      {categories}
    </>
  );
};
