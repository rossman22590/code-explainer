import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

const Home: NextPage = () => {
  const [code, setCode] = useState('');

  function handleSubmit() {
    console.log(code);
    // Do something with the submitted code snippet
  }

  return (
    <div className={styles.CodeMirror}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/chatgpt-icon.svg" />
      </Head>

      <main className={styles.main}>
        <h1>Code Snippet Page</h1>
        <p>Enter your code snippet below:</p>
        <textarea className={styles.code} value={code} onChange={(e) => setCode(e.target.value)} />
        <button className={styles.submitBtn} onClick={handleSubmit}>Submit</button>
      </main>
    </div>
  )
}

export default Home
