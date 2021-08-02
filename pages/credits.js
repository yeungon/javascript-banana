import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Navigate from "../components/navigate";
import styles from "../styles/About.module.css";
import Footer from "../components/footer";

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
            <p className="question__title">
                <h4>Credits</h4>
            1) https://github.com/denysdovhan/wtfjs
            2) https://twitter.com/oliverjumpertz/status/1415973145652178953
            </p>
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
