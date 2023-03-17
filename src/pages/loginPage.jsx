import style from "./styles.module.css";
import vertigo from "../assets/logo.svg";

function loginPage() {
  return (
    <div className={style.container}>
      <aside className={style.leftBar}>
        <div>
          <img className={style.logo} src={vertigo} alt="logo of company" />
          <h1 className={style.title}>Acesse a plataforma</h1>
          <p className={style.subtitle}>
            Faça login ou registre-se para começar a construir seus projetos
            ainda hoje.
          </p>
          <div className={style.inputs}>
            <div className={style.email}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>
            <div className={style.password}>
              <div className={style.labelPassword}>
                <label htmlFor="password">Senha</label>
                <span>
                  <a href="#">Esqueceu a senha?</a>
                </span>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <button className={style.buttonEnter} type="submit">
              Entrar
            </button>
            <p className={style.textFooter}>
              Ainda não tem uma conta?{" "}
              <span>
                <a href="#"> Inscreva-se</a>
              </span>
            </p>
          </div>
        </div>
      </aside>
      <div className={style.rightBackground}></div>
    </div>
  );
}

export default loginPage;
