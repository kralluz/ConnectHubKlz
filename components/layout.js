import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import { useEffect, useState } from "react";
import Link from 'next/link';


const name = '[Your Name]';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  const [apiData, setApiData] = useState("");

  useEffect(() => {
    fetch('/api/hello')
    .then(response => response.json())
    .then(data => setApiData(data.name))
    .catch(error => console.error('Error fetching data:', error));
}, []);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{apiData}</h1>
          </>
        ) : (
          <>
            
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
