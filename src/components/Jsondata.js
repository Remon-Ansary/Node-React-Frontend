import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Jsondata() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("/addTweet");
    const items = await data.json();
    setItems(items);
  };

  return (
    <section>
      {items.map((item) => (
        <div>
          <p> {item.name}</p>
          <p> {item.occupation}</p>
     
          <img src={item.img} alt="image" width="300px" height="300px"></img>
    

        </div>
      ))}
    </section>
  );
}

export default Jsondata;
