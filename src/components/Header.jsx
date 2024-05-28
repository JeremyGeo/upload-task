import { Link } from "react-router-dom"

function Header() {
    return <header>
    <div className="logo">
      <h1>logo</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        </nav>
    </div>
  </header>
}

export default Header