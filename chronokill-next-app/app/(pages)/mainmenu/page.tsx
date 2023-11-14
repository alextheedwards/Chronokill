import Link from 'next/link'

const MainMenu = () => {
	
	return (
		<div>
			<h1>Main Menu</h1>

			<Link href="/">Root</Link>
			<Link href="/login">Login</Link>
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/nopage">Page That Doesn't Exist</Link>
		</div> 
	)
}
  
export default MainMenu