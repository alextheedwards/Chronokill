"use client"
import styles from './styles.module.css'
import { Button, TextInput, Header } from '../../components'
import { useState } from 'react'

	export const Register = () => {
		const [email, setEmail] = useState("")
		const [confirmEmail, setConfirmEmail] = useState("")
		const [password, setPassword] = useState("")
		const [confirmPassword, setConfirmPassword] = useState("")
		const [firstName, setSetFirstName] = useState("")
		const [lastName, setLastName] = useState("")
		
	const onClickSignUp = (e: any ) => {
		e.preventDefault();
	console.log(email, confirmEmail, password, confirmPassword, firstName, lastName)
	}

	return (
	<div>
		<div className={styles.bg}></div>
		<Header showBackButton={true} />
		<div className={styles.rectangle}>
			<h1 className={styles.h1}>Register</h1>
			<form>
				<TextInput type="email" title="Email" value={email} setter={setEmail} />
				<TextInput type="confirm email" title="Confirm Email"value={confirmEmail} setter={setConfirmEmail}/>
				<TextInput type="password" title="Password" value={password} setter={setPassword}/>
				<TextInput type="password" title="Confirm Password" value={confirmPassword} setter={setConfirmPassword}/>
				<TextInput type="first name" title="First Name" value={firstName} setter={setSetFirstName}/>
				<TextInput type="last name" title="Last Name" value={lastName} setter={setLastName}/>
				<Button onClick={onClickSignUp}>Sign Up</Button>
			</form>
		</div>
	</div>
	)
}

export default Register


