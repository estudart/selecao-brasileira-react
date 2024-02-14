export default function Jogador({ nome, jogadorData, handleSelect }) {
  return (
    <div>
      {jogadorData ? (
        <div style={{ color: "white" }} onClick={() => handleSelect(nome)}>
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
