// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Home/Navs';
import Header from './component/Home/Header';
import './css/cssapp.css'
import './css/animation.css'
import Footer from './component/Home/Footer';
import Content from './component/Home/Content';
import { SmothScroll } from './component/Home/SmothScroll';
// import './css/animation.css'


function App() {

  const bind_about = SmothScroll('#about')

  return (
    <div className="App">
      <Navbar />
      <Header />
      <div {...bind_about}></div>
      <Content/>
      <Footer />
    </div>
  );
}

export default App;
