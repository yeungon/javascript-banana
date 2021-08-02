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
              JavaScript is a great language in many ways. Yet, there are some
              technical debts due to a not-so-good prototype from the first day it was designed.
            </p>
          </div>

          <div className={styles.about__wrapper_right}>
            <p className="question__title">
              This page attempts to synthesize some gotchas `banana` of the
              language. Hope that helps just in case you want to reach a deeper
              level.
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
