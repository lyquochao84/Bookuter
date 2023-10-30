import { useState, useEffect } from "react";
import styles from "./slider.module.css";
import Link from "next/link";

const slides = [
  {
    imageUrl: "/img/slider/homepage-slide-picture1.png",
    text: "World of Books",
  },
  {
    imageUrl: "/img/slider/homepage-slide-picture2.jpg",
    text: "Explore Endless Stories",
  },
  {
    imageUrl: "/img/slider/homepage-slide-picture3.jpg",
    text: "Discover Your Literary Journey",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const currentSlideStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.5)), url(${slides[currentSlide].imageUrl})`,
    backgroundColor: `black`,
    width: `100%`,
    height: `80%`,
    backgroundSize: `cover`,
    objectFit: `contain`,
    position: `relative`,
    display: `flex`,
    justifyContent: `center`,
  };

  return (
    <div style={currentSlideStyle}>
      <div className={styles.slider_content}>
        <p className={styles.image_text}>{slides[currentSlide].text}</p>
        <Link href="/contact" className={styles.slider_contact_link}>
          <span>GET IN TOUCH</span>
        </Link>
      </div>
    </div>
  );
}

export default Slider;
