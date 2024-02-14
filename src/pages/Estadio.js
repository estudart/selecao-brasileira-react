import "../App.css";
import { useState, useEffect } from "react";
import EstadioCard from "../components/EstadioCard";
import axios from "axios";

export default function Estadio() {
  const [estadiosData, setEstadiosData] = useState("");

  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://127.0.0.1:5000/estadio");
      const estadio_data = result.data;
      setEstadiosData(estadio_data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      {estadiosData ? (
        <div>
          {" "}
          {estadiosData.map((estadio) => (
            <EstadioCard estadio={estadio} />
          ))}{" "}
        </div>
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
}
