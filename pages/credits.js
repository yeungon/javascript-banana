import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Navigate from "../components/navigate";
import styles from "../styles/Credits.module.css";
import Footer from "../components/footer";

const creditObjectHTML = 
  {__html: `
    <ol>
     <li>https://github.com/denysdovhan/wtfjs</li>
     <li>https://twitter.com/oliverjumpertz/status/1415973145652178953</li>
     <li>https://jsisweird.com/</li>
     <li>https://javascript.plainenglish.io/here-are-7-weird-things-in-javascript-42da32e7b50</li>
     </ol>
    `
  }


export default function Home() {
  return (
    <div>
      <Head>
        <title>JavaScript Banana</title>
        <meta name="description" content="JavaScript banana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Navigate />
          <Header />
          <div className={styles.about__wrapper}>
            <div className={styles.credit__title}>
                <h4>Credits</h4>
              <div dangerouslySetInnerHTML={creditObjectHTML} />
            </div>
          </div>

          

          <div className={styles.about__author}>
            <div className="author">
              <p>Crafted by Vuong Nguyen</p>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}
