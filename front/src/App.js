import "./App.css";
import Agregarusuario from "./componetes/agregarusuario";
import Editarusuario from "./componetes/editarusuario";
import Listausuarios from "./componetes/listausuarios";
//imporracion para las rutas
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            crud merc
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">
                Agregarusuario
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Listausuarios />} exact></Route>
          <Route path="/agregarusuario" element={<Agregarusuario />} exact></Route>
          <Route path="/editar/:idusuario" element={<Editarusuario />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
