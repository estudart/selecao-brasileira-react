import Jogador from "../components/Jogador";

export default function Campo({ jogadorData }) {
  return (
    <div className="campo-jodagores" style={{ border: "2px solid black" }}>
      <div style={{ padding: "50px" }}>
        <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center" }}>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div style={{ justifySelf: "end" }}>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center" }}>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Jogador nome={"Cafu"} jogadorData={jogadorData} />
        </div>
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center", justifySelf: "end" }}>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div>
          <Jogador nome={"Ronaldinho"} jogadorData={jogadorData} />
        </div>
        <div style={{ alignSelf: "center", justifySelf: "start" }}>
          <Jogador nome={"Lucio"} jogadorData={jogadorData} />
        </div>
      </div>
      <div style={{ position: "relative", bottom: "50px" }}>
        <Jogador nome={"Marcos"} jogadorData={jogadorData} />
      </div>
    </div>
  );
}
