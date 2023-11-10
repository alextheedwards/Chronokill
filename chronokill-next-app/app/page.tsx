import Link from 'next/link'

const getData = async () => {
  const res = await fetch('http://localhost:8080/greet')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

	const contentType = res.headers.get('content-type') ?? ""

	if (contentType.includes('application/json')) {
		return res.json();
	} else if (contentType.includes('text/plain')) {
		return res.text();
	} else if (contentType.includes('image')) {
		return res.blob();
	} else {
		throw new Error('Unsupported content type');
	}
}

const HomePage = async () => {
	const data = await getData()
	
	return (
		<div>
			<h1>Home Page</h1>
			<div>{data}</div>
			<Link href="/login">Test Page</Link>
			<Link href="/main">Main Menu</Link>
		</div> 
	)
}

export default HomePage