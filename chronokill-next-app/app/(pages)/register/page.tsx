import styles from './styles.module.css'
import { Button, TextInput, Header } from '../../components'

export const Register = () => {

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
				<TextInput type="confirm password" title="Confirm Password" />
				<TextInput type="first name" title="First Name" />
				<TextInput type="last name" title="Last Name" />
				<Button href="submit">Sign Up</Button>
			</form>
		</div>
	</div>
	)
}
  
export default Register