import LoginBtn from "../components/LoginBtn";
import styles from "../styles/Login.module.css"
import Nav from "../components/Nav"
import { useSession } from "next-auth/react"
import router, { useRouter } from "next/router";

export default function Login() {

    const { data: session } = useSession()
  if (session) {
   router.push('/Home')
  }
    return (
        <div className={styles.loginContainer}>
            <Nav/>
            <div className={styles.loginContent}>
                <h1 className={styles.loginFontContenth1}>Filmes, séries e muito mais. Sem limites. </h1>  <br />
                <h2 className={styles.loginFontContenth2}>Assista onde quiser. Cancele quando quiser.</h2> <br />
                <h2 className={styles.loginFontContenth2}>Pronto para assistir? Entre já.</h2>
                <LoginBtn></LoginBtn>
            </div>
        </div>
    )
}


