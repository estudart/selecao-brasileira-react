import "../App.css";

export default function Estatistica() {
  return (
    <div className="App">
      <div className="campo-jodagores">
        <div style={{ padding: "50px" }}>1</div>
        <div className="campo-jodagores__2">
          <div style={{ alignSelf: "center" }}>2</div>
          <div style={{ justifySelf: "end" }}>3</div>
          <div style={{ alignSelf: "center" }}>4</div>
        </div>

        <div className="campo-jodagores__2">
          <div style={{ alignSelf: "center" }}>2</div>
          <div>3</div>
          <div style={{ alignSelf: "center" }}>4</div>
        </div>
        <div className="campo-jodagores__2">
          <div style={{ alignSelf: "center" }}>2</div>
          <div>3</div>
          <div style={{ alignSelf: "center" }}>4</div>
        </div>
        <div>8</div>
      </div>
    </div>
  );
}
