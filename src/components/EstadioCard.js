export default function EstadioCard({ estadio }) {
  return (
    <div className="home-page-container_1">
      <img
        className="home-page-container_1--image"
        src={`${estadio.imagem}`}
        alt="Brazil Icon"
      />
      <p className="home-page-container_1--text">{estadio.descricao}</p>
    </div>
  );
}
