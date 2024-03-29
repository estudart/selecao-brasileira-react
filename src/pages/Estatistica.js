import { useEffect, useState } from "react";
import "../App.css";
import Campo from "../components/Campo";
import JogadorCard from "../components/JogadorCard";
import axios from "axios";

export default function Estatistica() {
  const [jogadorData, setJogadorData] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("Ronaldinho");

  function handleSelect(selectname) {
    setSelected(selectname);
  }

  useEffect(() => {
    async function getData() {
      const result = await axios.get("http://127.0.0.1:5000/jogador");
      const data = result.data;
      setJogadorData(data);
      console.log(data);
      setLoading(true);
    }

    getData();
  }, []);
  return (
    <div className="App">
      {loading && jogadorData ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Campo
            jogadorData={jogadorData}
            handleSelect={handleSelect}
            selected={selected}
          />
          <JogadorCard jogadorData={jogadorData} selected={selected} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
