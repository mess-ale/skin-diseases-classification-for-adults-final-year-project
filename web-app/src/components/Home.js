import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import homeimage1 from "./assets/homepage.jpg";
import { Footer } from "./Footer";


export const Home = () => {
  return (
    <>
      <div>
        <nav className="homenav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <div className="vertical-line"></div>
            </li>
            <li>
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </nav>

        <div className="image-container">
          <img
            src={homeimage1}
            alt="for skin disease classification using machine learnign code"
          />
          <div className="text-overlay">
            <div className="headlainofhome">
              <h1>skin diseases classification for adults</h1>
            </div>
            <div className="container">
              <h3 className="leftright">
                Our cutting-edge machine learning system provides accurate
                classification of adult skin diseases. Upload an image and
                receive a detailed analysis, empowering you to take informed
                next steps in your health journey.
              </h3>
              <div className="leftright">
                <button>
                  <Link to="/join">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="centerheader">
        <h1>Revolutionize Adult Skin Health</h1>
      </div>
      <div className="endingofpage">
        <div className="take">
          <h1>Welcome to Our Innovative World of Machine Learning!</h1>
          <p>An introduction to our homepage, highlighting the use of advanced machine learning technology for skin diseases classification in adults. Get ready to explore the fascinating intersection of dermatology and artificial intelligence.</p>
        </div>
        <div className="take">
          <h1>Unleashing the Power of Machine Learning Algorithms</h1>
          <p>Learn how we employ state-of-the-art machine learning algorithms specifically trained on vast datasets of dermatological images and clinical data. Discover how these algorithms can accurately classify and diagnose skin conditions.</p>
        </div>
        <div className="take">
          <h1>Comprehensive Classification: From A to Z!</h1>
          <p>Explore the wide range of skin diseases covered by our machine learning models. From common conditions to rare disorders, our algorithms have been trained to classify and identify various skin diseases with precision.</p>
        </div>
        <div className="take">
          <h1>Continuous Learning for Enhanced Accuracy!</h1>
          <p>Learn how our machine learning models are continually updated and refined as new data becomes available. This ensures that our classification system remains up-to-date, reflecting the latest advancements in dermatological research.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
