import './App.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="./react.png" alt="React logo" width={40} />
        <ul className="nav-elements">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function Body() {
  return (
    <div>
      <h1>Fun facts about React!</h1>
        <ol>
          <li>Fact 1</li>
          <li>Fact 2</li>
          <li>Fact 3</li>
          <li>Fact 4</li>
          <li>Fact 5</li>
        </ol>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2023 DURVE development. All rights reserved."</small>
    </footer>
  )
}
export default function App() {
  return (
    <div className='myApp'>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
