// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Home/Navs';
import Header from './component/Home/Header';
import './css/cssapp.css'
import './css/animation.css'
import Footer from './component/Home/Footer';
import Content from './component/Home/Content';
import { SmothScroll } from './component/Home/SmothScroll';
import Menu from './component/Info/Menu';
// import './css/animation.css'


function App() {

  const bind_about = SmothScroll('#about')

  return (
    <div className="App">

      {/* trang home */}
      {/* <Navbar />
      <Header />
      <div {...bind_about}></div>
      <Content />
      <Footer /> */}

      {/* trang cá nhân */}
      <Menu />
    </div>
  );
}

export default App;
