import axios from "axios";
import { useEffect, useState } from "react";
import Raiders from "./Raiders";
import Defenders from "./Defenders";
import AllRounders from "./AllRounders";

const RaiderMain = () => {
  const [categories, setCategory] = useState([]);
  const [filepath, setFilepath] = useState("");

  useEffect(() => {
    axios.get("http://localhost:6001/api/v1/get-categorys")
      .then((response) => {
        setCategory(response.data.data);
        setFilepath(response.data.filepath);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <div>
      {categories.map((d, i) => {
        if (d.name === "Raiders") {
          return <Raiders key={i} players={d.players} category={d} filepath={filepath} />;
        }
        if (d.name === "Defenders") {
          return <Defenders key={i} players={d.players} category={d} filepath={filepath} />;
        }
        if (d.name === "All Rounders") {
          return <AllRounders key={i} players={d.players} category={d} filepath={filepath} />;
        }
        return null;
      })}
      </div>
    </>
  );
};

export default RaiderMain;
