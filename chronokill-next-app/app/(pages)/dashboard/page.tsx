import Link from 'next/link'

import { TextEngine } from '../../components'

const Dashboard = () => {
	
	return (
		<div>
			<div>Top Panel</div>
      <div>Dashboard</div>
      <TextEngine />

			<Link href="/">Home</Link>
			<Link href="/login">Login</Link>
			<Link href="/nopage">Page That Doesn't Exist</Link>
		</div> 
	)
}
  
export default Dashboard