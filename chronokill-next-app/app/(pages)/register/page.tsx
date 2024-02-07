"use client"
import styles from './styles.module.css'
import { Button, TextInput, Header } from '../../components'

	export const Register = () => {
	const onClickSignUp = (e: any ) => {
		e.preventDefault();
	const email=(document.getElementById("Email")as HTMLInputElement).value
	const confirmEmail=(document.getElementById("Confirm Email")as HTMLInputElement).value
	const password=(document.getElementById("Password")as HTMLInputElement).value
	const confirmPassword=(document.getElementById("Confirm Password")as HTMLInputElement).value
	const firstName=(document.getElementById("First Name")as HTMLInputElement).value
	const lastName=(document.getElementById("Last Name")as HTMLInputElement).value
	console.log(email, confirmEmail, password, confirmPassword, firstName, lastName)
	}

	return (
	<div>
		<div className={styles.bg}></div>
		<Header showBackButton={true} />
		<div className={styles.rectangle}>
			<h1 className={styles.h1}>Register</h1>
			<form>
				<TextInput type="email" title="Email" />
				<TextInput type="confirm email" title="Confirm Email" />
				<TextInput type="password" title="Password" />
				<TextInput type="password" title="Confirm Password" />
				<TextInput type="first name" title="First Name" />
				<TextInput type="last name" title="Last Name" />
				<Button onClick={onClickSignUp}>Sign Up</Button>
			</form>
		</div>
	</div>
	)
}

export default Register