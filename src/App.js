import "./App.css";
import NavBar from "./components/NavBar.js";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <h1 className="home-page-title">
          <img
            className="home-page-title--image"
            src="https://images.yampi.me/assets/stores/poupeimagazine/uploads/images/taca-da-copa-do-mundo-de-2022-27cm-560g-6320ed45e4160-large.png"
            alt="taca da copa"
          />
          Copa do mundo
        </h1>
        <YoutubeEmbed embedId="uED_3a38DPg" />
        <div className="home-page-container_1">
          <img
            className="home-page-container_1--image"
            src="https://s.glbimg.com/es/ge/f/300x230/2010/06/06/cafu_tacafifa3_get_300.jpg"
            alt="Brazil Icon"
          />
          <p className="home-page-container_1--text">
            A história da Copa do Mundo de 2002 é repleta de momentos memoráveis
            e emocionantes. Realizada no Japão e Coreia do Sul, esta edição do
            torneio foi marcada por surpresas, reviravoltas e conquistas
            históricas. Desde a vitória do Brasil sobre a Alemanha na final até
            a inesquecível trajetória da seleção sul-coreana, o torneio cativou
            o mundo com sua paixão pelo futebol. Mais do que um campeonato, a
            Copa de 2002 deixou um legado duradouro, inspirando uma nova geração
            de fãs e jogadores e mostrando o poder unificador do esporte.
          </p>
        </div>
        <div className="home-page-container_2">
          <p className="home-page-container_1--text">
            A Copa do Mundo de 2002 exibiu um futebol emocionante e de alto
            nível. Com craques como Ronaldo e Ronaldinho brilhando nos gramados
            do Japão e Coreia do Sul, os torcedores foram presenteados com jogos
            intensos e momentos inesquecíveis. A habilidade, a paixão e o
            talento dos jogadores encantaram o mundo, transformando cada partida
            em um espetáculo único. A Copa de 2002 ficou marcada não apenas
            pelos resultados, mas também pelo espetáculo proporcionado pelos
            melhores jogadores do planeta.
          </p>
          <img
            className="home-page-container_1--image"
            src="https://i.pinimg.com/736x/99/ff/01/99ff014423d77758ad030a5517a0f8a8.jpg"
            alt="Ronaldinho e Ronaldinho"
          />
        </div>
        <div class="album py-5 bg-body-tertiary">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div class="col">
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://trivela.com.br/wp-content/uploads/2014/05/4889953505_01ba8a2acf_b.jpg"
                    alt="Estadio de Seogwipo"
                  />
                  <div class="card-body">
                    <p class="card-text home-page-card--text">
                      Explore a história e os detalhes de cada estádio da Copa
                      de 2002, evento lembrado com carinho. Descubra fatos sobre
                      esses locais que foram palcos de momentos emocionantes do
                      futebol.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/06/GettyImages-892454.jpg"
                    alt="Bola e Taça"
                  />
                  <div class="card-body">
                    <p class="card-text home-page-card--text">
                      Explore os dados dos jogadores da Seleção Brasileira na
                      Copa do Mundo de 2002. Descubra estatísticas e
                      curiosidades sobre os astros que brilharam nesse torneio
                      histórico.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    src="https://blog.bi9.com.br/wp-content/uploads/copa-do-mundo-380x249.jpg"
                    alt="Bola e Taça"
                  />
                  <div class="card-body">
                    <p class="card-text home-page-card--text">
                      Explore as curiosidades da Copa do Mundo de 2002. Descubra
                      fatos interessantes, momentos históricos e surpresas que
                      marcaram este evento memorável.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function YoutubeEmbed({ embedId }) {
  return (
    <div className="home-page-video">
      <iframe
        width="500"
        height="280"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
