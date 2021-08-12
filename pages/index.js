import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Navigate from "../components/navigate";
import Footer from "../components/footer";

export async function getStaticProps() {

  const res = await fetch("https://api.js.edu.vn/");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  
  const [number, handleNumber] = useState(1);
  // const [dataAPI, setDataAPI] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(async () => {
  //   try {
  //     const res = await fetch("https://api.js.edu.vn/");
  //     const postsEffect = await res.json();      
  //     await setDataAPI(postsEffect);
  //     console.log(postsEffect)
  //     setIsLoading(false);
  //   }catch(e){
  //     console.log(e.message)
  //   }
    
  // }, []);


  
  function handleClick() {
    if (number < posts.length) {
      handleNumber(number + 1);
    } else {
      alert("out of scope");
      return;
    }
  }

  function handleClickDecrease() {
    if (number > 1) {
      handleNumber(number - 1);
    } else {
      alert("out of scope");
      return;
    }
  }

  return (
    <div>
      <Head>
        <title>JavaScript Banana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Navigate />
          <Header />
          <div className="question__cover">
            
            <p className="question__title" dangerouslySetInnerHTML={{__html: posts[number - 1].fields.Notes}}></p>
            
          </div>
          <div className="counting__cover">
            <p className="counting__content">{number}</p>
          </div>
          <div className="answer__cover">            
          <p className="answer__title" dangerouslySetInnerHTML={{__html: posts[number - 1].fields.explain}}></p>

          </div>
          <div className="controller">
            <div>
              {/* <i className="bx bxs-left-arrow-circle" style={{color: '#e91e63'}} />
      <i className="bx bxs-right-arrow-circle" style={{color: '#e91e63'}} /> */}
              <Image
                className="controller__arrow-left"
                src="/images/arrow.png"
                onClick={handleClickDecrease}
                width={76}
                height={24}
                alt={"Arrow"}
              />
              <Image
                className="controller__arrow-right"
                src="/images/arrow.png"
                onClick={handleClick}
                width={76}
                height={24}
                alt={"Arrow"}
              />
              <div>
                <div className="author">
                  <p>Crafted by Vuong Nguyen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
