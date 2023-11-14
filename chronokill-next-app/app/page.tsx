import Link from 'next/link'

import { FetchService } from './services'

const RootPage = async () => {
	const data = await FetchService()
	
	return (
		<div>
			<h1>Root Page</h1>
			<div>{data}</div>
			<Link href="/login">Login</Link>
			<Link href="/mainmenu">Main Menu</Link>
		</div> 
	)
}

export default RootPage