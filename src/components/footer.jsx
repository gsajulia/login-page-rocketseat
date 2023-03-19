import style from "./styles.module.css";

function Footer() {
  return (
    <div className={style.container}>
      Made by
      <a
        className={style.nameFooter}
        href="https://gsajulia.github.io/"
        target="_blank"
      >
        Júlia
      </a>
      and
      <a
        className={style.nameFooter}
        href="https://rickazuo.github.io/portfolio/"
        target="_blank"
      >
        Ricardo
      </a>
    </div>
  );
}

export default Footer;
