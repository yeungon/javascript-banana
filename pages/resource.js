
import Head from "next/head";
import Header from "../components/header";
import Navigate from "../components/navigate";
import styles from "../styles/Resource.module.css";
import Footer from "../components/footer";


export default function API() {
  const about__html = `We also server a free API for those who want to build your own "gotcha" version. 
              <br/><br/>

              API: <a href = "https://banana.laptrinh.org/api/v1">https://banana.laptrinh.org/api/v1</a>

              <br><br>

              API is built with Airtable and hosted on a (cheap) shared PHP server. 

              `;
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
           <p className={styles. about__intro} dangerouslySetInnerHTML={{__html: about__html}}>             
           </p>
          </div>
          <div className={styles.about__author}>
            <div className="author">
              <p>Crafted by Vuong Nguyen</p>
            </div>
          </div>          
        </div>
         <Footer />
      </main>
    </div>
  );
}
