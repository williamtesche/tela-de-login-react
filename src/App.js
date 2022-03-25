import "./styles.css"


function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">

          <form className="login-from">

            <span className="login-form-title">Bem Vindo!</span>


            <div className="wrap-input">
              <input className="input" type="Email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input className="input" type="Password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>


              <div className="container-login-from-btn">
                <button className="login-from-btn">Login</button>
              </div>


              <div className="text-center">
                <span className="txt1">Não possui conta?</span>

                <a className="txt2" href="#">Criar conta.</a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
