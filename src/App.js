import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Copa do Mundo 2002</h1>
      <h2>Start editing to see some magic happen!</h2>
      import sample from './sample.mp4';
      <YoutubeEmbed embedId="uED_3a38DPg" />
    </div>
  );
}

function YoutubeEmbed({ embedId }) {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
