import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./utils/Card";

export const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://catchtheshow.herokuapp.com/api/charts/hot")
      .then((resp) => {
        setData(resp.data);
      });
  }, []);
  console.log(data[0]?.name);

  return (
    <div>
      {data?.map((dta) => (
        <div class="card shadow h-100">
          <img src={dta?.imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{dta?.name}</h5>
            <p class="card-text">{dta?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
