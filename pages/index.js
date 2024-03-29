import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Navigate from "../components/navigate";
import Footer from "../components/footer";


export default function Home({ posts }) {
  const image__instruction = [
    {
      url: "infor-image.png",
      width: 150,
      height: 150,
      className: "quicktip__image-info",
    },
    {
      url: "quick_tip_image.png",
      width: 344 / 3,
      height: 255 / 3,
      className: "quicktip__image-tip",
    },
  ];

  const [number, handleNumber] = useState(1);
  const [classCircle, handleclassCircle] = useState(0);
  const [indexImage, changeImage] = useState(0);

  useEffect(() => {
    function handleImage(currentPost) {
      let currentPost__posttype = posts[currentPost - 1].fields.post__type;
      if (currentPost__posttype === "info") {
        changeImage(0);
      } else {
        changeImage(1);
      }
    }

    handleImage(number);
  }, [number]);

  function changeCircle(currentPost) {
    let length = posts.length;
    let currentPercent = (currentPost * 100) / length;    
    handleclassCircle(Math.ceil(currentPercent));
  }

  function handleClickIncrease() {
    if (number < posts.length) {
      changeCircle(number + 1);
      handleNumber(number + 1);
    } else {
      alert("out of scope");
      return;
    }
  }

  function handleClickDecrease() {
    if (number > 1) {
      changeCircle(number - 1);
      handleNumber(number - 1);
    } else {
      alert("Bro, that is all we have now!");
      return;
    }
  }
  
  return (
    <div>
      <Head>
        <title>JavaScript Banana</title>
        <meta name="description" content="JavaScript tutorial and tip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Navigate />
          <Header />

          <div className="question__cover">
            <p
              className="question__title"
              dangerouslySetInnerHTML={{
                __html: posts[number - 1].fields.Notes,
              }}
            ></p>
          </div>

          <div className={`c100 counting__circle center p${classCircle}`}>
            <span>{number}</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>

          <div className="answer__cover">
            <p
              className="answer__title"
              dangerouslySetInnerHTML={{
                __html: posts[number - 1].fields.explain,
              }}
            ></p>
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
                onClick={handleClickIncrease}
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


export async function getStaticProps() {
  const res = await fetch("https://api.vuongnguyen.net/airtable/js.php");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}