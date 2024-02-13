export default function Jogador({ nome, jogadorData }) {
  return (
    <div>
      {jogadorData ? (
        <div style={{ color: "white" }}>
          <img
            style={{ width: "30px", borderRadius: "50%" }}
            src={`${
              jogadorData.find((jogador) => jogador.nome === nome).imagem
            }`}
            alt="foto particular"
          />
          <p>{nome}</p>
        </div>
      ) : (
        <div>
          <p>{nome}</p>
        </div>
      )}
    </div>
  );
}
