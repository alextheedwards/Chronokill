import Link from 'next/link'

const MainPage = () => {
	
	return (
		<div>
			<h1>Main Menu</h1>

			<Link href="/">Home</Link>
			<Link href="/login">Login</Link>
			<Link href="/nopage">Page That Doesn't Exist</Link>
		</div> 
	)
}
  
export default MainPage