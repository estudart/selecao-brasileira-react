import "../App.css";

export default function JogadorCard({ jogadorData, selected }) {
  const jogador = jogadorData.find((jogador) => jogador.nome === selected);

  return (
    <div style={{ flexGrow: "1", marginInline: "10%" }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          style={{ height: "40vh", width: "100%" }}
          src={jogador.imagem}
          alt="foto particular"
        />
        <div className="card-body">
          <h5 className="card-title">{jogador.nome}</h5>
          <p className="card-text">{jogador.descricao}</p>
          <table className="player-info-table">
            <tbody>
              <tr>
                <td>Altura:</td>
                <td>{jogador.altura}</td>
              </tr>
              <tr>
                <td>Perna preferida:</td>
                <td>{jogador.perna_preferida}</td>
              </tr>
              <tr>
                <td>Posição:</td>
                <td>{jogador.posicao}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
