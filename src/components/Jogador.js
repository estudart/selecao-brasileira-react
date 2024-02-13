export default function Jogador({ nome, jogadorData, loading }) {
  return (
    <div>
      {jogadorData ? (
        <div>
          <img
            style={{ width: "20px", borderRadius: "50%" }}
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
