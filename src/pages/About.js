import './About.css';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-container">
      {/* анимация */}
      <h1 className="hover-move">
        About the company
      </h1>

      <p>
        The company "Book" is a modern bookstore offering a wide range of literature for all ages and interests. We strive to make reading accessible and enjoyable for every customer, whether a lover of classics, a fan of contemporary bestsellers, or a parent looking for quality books for children.
      </p>

      <h2>What we offer</h2>

      <ul>
        <li>Children's books and educational materials</li>
        <li>Books on psychology, self-development, and popular science</li>
        <li>Gift editions with illustrations and collectible books</li>
      </ul>

      <p>
        We work directly with publishers, which allows us to offer competitive prices and guarantee the quality of our products. For customer convenience, we have both a cozy offline store and a modern online shop with easy search and fast delivery.<br /><br />

        "Book" is not just a store, but a place where new knowledge, ideas, and inspiration are born. We support the reading community, organize literary events and promotions so that everyone can find their book and rediscover the world of reading.<br /><br />

        By choosing "Book," you choose quality, variety, and a love for books.
      </p>
    </div>
  );
};

export default About;
