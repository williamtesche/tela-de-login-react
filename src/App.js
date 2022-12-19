import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";
import Cadastro from "./Cadastro";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Button() {
    alert("Seu login foi Negado!");
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-from">
            <span className="login-form-title">Bem Vindo!</span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                c
                className={email !== "" ? "has-val input" : "input"}
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button className="login-form-btn" onClick={Button}>
                Login
              </button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
            </div>

            <Router>
              <Route path="/" exact component={Cadastro}>
                <a className="txt2" href="/">
                  Criar conta.
                </a>
              </Route>
            </Router>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
