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
            who come together to solve problems and build products. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Incidunt ex commodi
            debitis ipsa alias earum rem doloribus molestias, nobis facilis
            repudiandae nihil architecto dicta, ratione temporibus. Tempore
            ipsum eius accusamus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Provident reiciendis optio, numquam assumenda nisi
            in quisquam aspernatur molestiae necessitatibus temporibus nam rerum
            maxime commodi aperiam quod sit unde magni dolorem?
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
