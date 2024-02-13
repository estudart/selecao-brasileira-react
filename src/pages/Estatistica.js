import { useEffect, useState } from "react";
import "../App.css";
import Jogador from "../components/Jogador";
import axios from "axios";

export default function Estatistica() {
  const [jogadorData, setJogadorData] = useState("");
  const [loading, setLoading] = useState(false);

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
        <div className="campo-jodagores">
          <div style={{ padding: "50px" }}>
            <Jogador
              nome={"Ronaldinho"}
              jogadorData={jogadorData}
              loading={loading}
            />
          </div>
          <div className="campo-jodagores__2">
            <div style={{ alignSelf: "center" }}>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div style={{ justifySelf: "end" }}>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div style={{ alignSelf: "center" }}>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
          </div>

          <div className="campo-jodagores__2">
            <div style={{ alignSelf: "center" }}>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div style={{ alignSelf: "center" }}>
              <Jogador
                nome={"Cafu"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
          </div>
          <div className="campo-jodagores__2">
            <div style={{ alignSelf: "center", justifySelf: "end" }}>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div>
              <Jogador
                nome={"Ronaldinho"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
            <div style={{ alignSelf: "center", justifySelf: "start" }}>
              <Jogador
                nome={"Lucio"}
                jogadorData={jogadorData}
                loading={loading}
              />
            </div>
          </div>
          <div>
            <Jogador
              nome={"Marcos"}
              jogadorData={jogadorData}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
