import './App.css';
import { Homepage, Header, Footer } from "./sections/index";

function App() {
  return (
    <>
      <Header/>
      <Homepage/>
      <Footer />
      <a href="https:/wa.me/+963932063444"  target="_blank" className="whatsapp_float"><i className="fa-brands fa-whatsapp whatsapp-icon"></i></a>
    </>
  );
}

export default App;
