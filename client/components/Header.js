import Link from 'next/link';
import styles from 'styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/about'>About</Link>
      </nav>
    </header>
  );
};

export default Header;
