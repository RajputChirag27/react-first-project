import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>HashCoderz</h1>
          <p>HashCoderz your solution for all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            HashCoderz is a community of developers, designers, and product
            managers who come together to solve problems and build products.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who We Are?</h1>
          <p>
            We are a community of developers, designers, and product managers
            who come together to solve problems and build products. Welcome to our leading software company, where innovation meets excellence! We offer a comprehensive suite of services tailored to meet your development, testing, and designing needs. Our team of skilled professionals is proficient in creating cutting-edge software solutions, customized to your unique requirements. From web and mobile app development to robust backend systems, we've got you covered. Our rigorous testing methodologies ensure flawless performance and reliability. For stunning user interfaces and intuitive user experiences, our expert designers work tirelessly to bring your vision to life. Whether you're a startup or an enterprise, we are your trusted partner in driving digital transformation. Experience top-notch services with us today!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.2s",
              }}
            >
              <AiFillGoogleCircle />
              <h3>Google</h3>
            </div>

            <div
              style={{
                animationDelay: "0.4s",
              }}
            >
              <AiFillAmazonCircle />
              <h3>Amazon</h3>
            </div>

            <div
              style={{
                animationDelay: "0.6s",
              }}
            >
              <AiFillYoutube />
              <h3>Youtube</h3>
            </div>

            <div
              style={{
                animationDelay: "0.8s",
              }}
            >
              <AiFillInstagram />
              <h3>Instagram</h3>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
