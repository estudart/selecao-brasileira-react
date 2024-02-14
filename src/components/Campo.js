import Jogador from "../components/Jogador";

export default function Campo({ jogadorData, handleSelect, selected }) {
  return (
    <div
      className="campo-jodagores"
      style={{
        border: "2px solid black",
        borderTop: "0px",
        borderBottom: "0px",
      }}
    >
      <div style={{ padding: "50px" }}>
        <Jogador
          nome={"Ronaldinho"}
          jogadorData={jogadorData}
          handleSelect={handleSelect}
        />
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center" }}>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div style={{ justifySelf: "end" }}>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center" }}>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div style={{ alignSelf: "center" }}>
          <Jogador
            nome={"Cafu"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      <div className="campo-jodagores__2">
        <div style={{ alignSelf: "center", justifySelf: "end" }}>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div>
          <Jogador
            nome={"Ronaldinho"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
        <div style={{ alignSelf: "center", justifySelf: "start" }}>
          <Jogador
            nome={"Lucio"}
            jogadorData={jogadorData}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      <div style={{ position: "relative", bottom: "50px" }}>
        <Jogador
          nome={"Marcos"}
          jogadorData={jogadorData}
          handleSelect={handleSelect}
        />
      </div>
    </div>
  );
}
