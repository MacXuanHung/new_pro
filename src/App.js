import './App.css';
import './style/style.css';

// import Home from '../screen/Home';
import Header from './layout/Header';
// import Body from './layout/Body';
import main from './layout/main';

function App() {
  return (
    <div className="container__app">
      <Header />
      <main />
    </div>
  );
}

export default App;
