import './index.css';
import Header from './components/Header';
import PhotoBackground from './components/PhotoBackground';
import ContentBox from './components/ContentBox';


function App() {

  return (
    <div className="App">
      <Header />

      <PhotoBackground />
      {/*
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <ContentBox title="What is Lorem Ipsum?" content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset"} />
      </div>*/}

    </div>
  );
}

export default App;
