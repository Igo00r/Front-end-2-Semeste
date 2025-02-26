import Link from 'next/link';

const Menu = () => {
    return (
      <>
          <ul className="menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/produto">produto</Link></li>
            <li><Link href="/sobre">sobre</Link></li>
            <li><Link href="/contato">contato</Link></li>

          </ul>
      </>
    )
  }
  
  export default Menu;
  