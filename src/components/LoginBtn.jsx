import { useSession, signIn, signOut } from "next-auth/react"
import styles from '../styles/loginbtn.module.css'
export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      
      <div className={styles.loginBtn}>
      <button className={styles.btn} onClick={() => signIn("auth0 ")}> Entrar</button>
      </div>
    </>
  )
}