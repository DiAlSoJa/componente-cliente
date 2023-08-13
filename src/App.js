import './App.css';
import Router from './router/Router';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <div className="container">
        <Router/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
