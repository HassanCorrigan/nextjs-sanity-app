import Link from 'next/link';
import styles from 'styles/components/header.module.css';

const Header = () => {
  return (
    <header className={`block ${styles.header}`}>
      <Link href='/'>
        <h1 className={styles.logo}>Logo</h1>
      </Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/store'>Store</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
};

export default Header;
