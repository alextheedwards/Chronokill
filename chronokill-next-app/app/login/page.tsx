import Link from 'next/link'

const Login = () => {

	return (
		<div>
			<h1>Login</h1>

			<Link href="/">Home</Link>
			<Link href="/main">Main</Link>
			<Link href="/dashboard">Page That Doesn't Exist</Link>
		</div> 
	)
}
  
export default Login