import "./App.css";
import NavBar from "./components/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h1 className="home-page-title">Copa do Mundo 2002</h1>
        <div className="home-page-container_1">
          <img
            className="home-page-container_1--icon"
            src="https://i.pinimg.com/originals/6a/4d/77/6a4d77381edc99d9290e1a3073e3b5cd.png"
            alt="Brazil Icon"
          />
          <p className="home-page-container_1--text">
            A Copa do Mundo de 2002 no Japão e na Coreia do Sul foi repleta de
            momentos emocionantes e surpresas. Com estrelas como Ronaldo e
            Ronaldinho brilhando, o torneio cativou o mundo com sua paixão pelo
            futebol. A vitória do Brasil sobre a Alemanha na final, e a
            surpreendente performance da seleção sul-coreana, foram alguns dos
            destaques deste evento histórico. A Copa de 2002 deixou um legado
            duradouro, demonstrando a capacidade da Ásia em sediar eventos
            esportivos de grande porte e inspirando uma nova geração de fãs e
            jogadores de futebol.
          </p>
        </div>
        <YoutubeEmbed embedId="uED_3a38DPg" />
      </div>
    </>
  );
}

function YoutubeEmbed({ embedId }) {
  return (
    <div className="video-responsive">
      <iframe
        width="425"
        height="240"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
