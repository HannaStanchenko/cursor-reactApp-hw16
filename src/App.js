import './App.css';
import Post from './components/Post';

function App() {
  const ANAKIN_IMAGE = "https://www.liveabout.com/thmb/62CoLXqCaCTlYOYr8np2Sgjru2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EP2-IA-32565_R_8x10-56a83bdc5f9b58b7d0f1b389.jpg";
  const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

  const author = {
    name: "Anakin Skywalker",
    photo: ANAKIN_IMAGE,
    nickname: "@dart_vader",
    date: "February 26",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image: RAY_IMAGE,
  };

  return (
    <div className="App">
      <Post author={author}/>
    </div>
  );
}

export default App;
