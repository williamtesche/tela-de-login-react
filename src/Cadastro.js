import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telefone, setTelefone] = useState("")

  function Alert() {
    alert("Seu cadastro foi salvo com sucesso!");
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-from">
            <span className="login-form-title">Cadastre-se</span>

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
                className={telefone !== "" ? "has-val input" : "input"}
                type="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Telefone"></span>
            </div>

            <div className="wrap-input">
              <input
                
              className={password !== "" ? "has-val input" : "input"}
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
              <button className="login-form-btn" onClick={Alert}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
