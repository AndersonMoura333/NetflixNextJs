import React, { useEffect } from "react";
import { useSession } from "next-auth/react"
import styles from '../styles/Nav.module.css'
function Nav() {
  const [show, setShow] = React.useState(false);
  const { data: session } = useSession()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100);
    });
  }, []);

  return (
    <div className={`${styles.navContainer} ${show && styles.navContainerBlack}`}>
      <img
        className={styles.navLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix"
      ></img>
      <div className={styles.testediv}>
        <div className={styles.fonteNav}>
          <p>Olá, {session ? session.user.name : `visitante`}</p>
        </div>
        <img
          className={styles.navAvatar}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
          alt="User"
        ></img>
      </div>
    </div>

  );
}

export default Nav;