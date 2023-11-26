import Link from 'next/link'

export const MainMenu = () => {
	
	return (
		<div>
			<h1>Main Menu</h1>

			<Link href="/">Root</Link>
			<Link href="/login">Login</Link>
			<Link href="/dashboard">Dashboard</Link>
			<Link href="/nopage">Page That Doesn&apos;t Exist</Link>
		</div> 
	)
}
  
export default MainMenu