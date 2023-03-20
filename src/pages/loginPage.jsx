import { useEffect, useRef, useState } from "react";

import style from "./styles.module.css";
import vertigo from "../assets/logo.svg";
import eyeOff from "../assets/eye-off.svg";

function loginPage() {
  const email = useRef("")
  const [emailState, setEmailState] = useState(null)

  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    console.log(email.current.validationMessage)
  }, [emailState])

  return (
    <div className={style.container}>
      <div className={style.main}>
        <aside className={style.leftBar}>
          <div>
            <img className={style.logo} src={vertigo} alt="logo of company" />
            <h1 className={style.title}>Acesse a plataforma</h1>
            <p className={style.subtitle}>
              Faça login ou registre-se para começar a construir seus projetos
              ainda hoje.
            </p>
            <div className={style.inputs}>
              <div className={`${style.email} ${style.invalidInput}`}>
                <label htmlFor="email">E-mail</label>
                <input
                  ref={email}
                  onChange={
                    (e) => setEmailState(e.target.value)
                  }
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail"
                  required
                />
                <span> {email.current.validationMessage} </span>
              </div>
              <div className={style.password}>
                <div className={style.labelPassword}>
                  <label htmlFor="password">Senha</label>
                  <span>
                    <a href="#">Esqueceu a senha?</a>
                  </span>
                </div>
                <div className={style.passwordContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Digite sua senha"
                    required
                  />
                  <img onClick={() => setShowPassword((prev) => !prev)} src={eyeOff} alt="hide or show password"/>
                </div>
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
    </div>
  );
}

export default loginPage;
