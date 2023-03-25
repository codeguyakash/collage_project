import axios from "axios";
import React, { useState } from "react";

function Home() {
  const [data, setData] = useState([]);
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setData(res.data));
  return (
    <>
      {data.map((res) => (
        <h1 key={res.id}>{res.name}</h1>
      ))}
    </>
  );
}

export default Home;
