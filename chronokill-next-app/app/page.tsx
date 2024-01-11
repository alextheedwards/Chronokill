import Link from 'next/link'

const RootPage = async () => {
	return (
		<div>
			<h1>Root Page</h1>
			<Link href="/login">Login</Link>
			<Link href="/mainmenu">Main Menu</Link>
		</div> 
	)
}

export default RootPage