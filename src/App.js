import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Banner from "./components/Banner";
import Info from "./components/Info";

function App() {
  return (
  <main>
   <Header />
    <section className='mainSection wrapper'>
      <Intro />
      <Banner />
      <Info />
    </section>
  </main>

  );
}

export default App;
