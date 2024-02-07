"use client"
import styles from './styles.module.css'
import { Button, TextInput, Header } from '../../components'

export const Login = () => {
	const onClickLog = (e: any ) => {
		e.preventDefault();
	const email=(document.getElementById("Email")as HTMLInputElement).value
	const password=(document.getElementById("Password")as HTMLInputElement).value
	console.log(email, password )
	}
	return (
	<div>
		<div className={styles.bg}></div>
		<Header showBackButton={false} />
		<div className={styles.rectangle}>
			<h1 className={styles.h1}>Login</h1>
			<form>
				<TextInput type="email" title="Email" />
				<TextInput type="password" title="Password" />
				<Button onClick={onClickLog}>Login</Button>
				<hr className={styles.hr}></hr>
				<p>No Account?</p>
				<Button href="../register"> Register</Button>
				
			</form>
		</div>
	</div>
	)
}
  
export default Login