import { Link } from "react-router-dom";
import img1 from "../assets/hero1.webp";
import img2 from "../assets/hero2.webp";
import img3 from "../assets/hero3.webp";
import img4 from "../assets/hero4.webp";

const carouselImages = [img1, img2, img3, img4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Welcome to comfy where you can browse our collections, place orders,
          and get inspired by our blog full of home decorating tips. Make your
          home the envy of your friends and the ultimate comfort zone for your
          family.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
