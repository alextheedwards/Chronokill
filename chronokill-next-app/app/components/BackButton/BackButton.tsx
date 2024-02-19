import Link from 'next/link'


interface ButtonProps {
  href: string;
}

export  const BackButton: React.FC<ButtonProps> = ({ href}) => {
  return (
    <Link href={href} style={{display: "flex", alignItems: "center"}}>
      <svg width="25" height="25" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.94427 26.4721C-0.740975 24.6295 -0.74097 19.3705 2.94427 17.5279L36.7639 0.618031C40.0884 -1.04422 44 1.37326 44 5.09017V38.9098C44 42.6267 40.0884 45.0442 36.7639 43.382L2.94427 26.4721Z" fill="#232D47"/>
</svg> <p style={{fontSize: "25px"}}>Back</p>

    </Link>
  )
}
