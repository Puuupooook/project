import React from "react";
import "./Catalog.css";

const Catalog = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        
        <h2>Status</h2>
        <ul>
          <li><label><input type="checkbox" name="status" value="new" /> New</label></li>
          <li><label><input type="checkbox" name="status" value="bestseller" /> Bestseller</label></li>
          <li><label><input type="checkbox" name="status" value="preorder" /> Pre-order</label></li>
        </ul>

        <h3>Author</h3>
        <ul>
          <li><label><input type="checkbox" name="author" value="jack-london" /> Jack London</label></li>
          <li><label><input type="checkbox" name="author" value="charles-dickens" /> Charles Dickens</label></li>
          <li><label><input type="checkbox" name="author" value="arthur-conan-doyle" /> Arthur Conan Doyle</label></li>
          <li><label><input type="checkbox" name="author" value="henry-rider-haggard" /> Henry Rider Haggard</label></li>
          <li><label><input type="checkbox" name="author" value="william-shakespeare" /> William Shakespeare</label></li>
          <li><label><input type="checkbox" name="author" value="jane-austen" /> Jane Austen</label></li>
          <li><label><input type="checkbox" name="author" value="f-scott-fitzgerald" /> F. Scott Fitzgerald</label></li>
          <li><label><input type="checkbox" name="author" value="joseph-conrad" /> Joseph Conrad</label></li>
        </ul>

        <h3>Publishers</h3>
        <ul>
          <li><label><input type="checkbox" name="publisher" value="rugram" /> RUGRAM</label></li>
          <li><label><input type="checkbox" name="publisher" value="book-on-demand" /> Book on Demand</label></li>
          <li><label><input type="checkbox" name="publisher" value="penguin-books" /> Penguin Books</label></li>
          <li><label><input type="checkbox" name="publisher" value="ast" /> AST</label></li>
          <li><label><input type="checkbox" name="publisher" value="vbs-logistic" /> VBS Logistic</label></li>
          <li><label><input type="checkbox" name="publisher" value="wordsworth" /> Wordsworth</label></li>
          <li><label><input type="checkbox" name="publisher" value="karo" /> KARO</label></li>
          <li><label><input type="checkbox" name="publisher" value="macmillan" /> Macmillan</label></li>
        </ul>

        <button className="find-btn" type="button">Найти</button>
      </aside>

      <section className="books-grid">
        {[
          { title: "Three Men in a Boat", price: "6$", img: "https://content.img-gorod.ru/pim/products/images/5e/6c/01906232-73a3-7d1e-8d72-5c7a7a145e6c.jpg?width=0&height=1200&fit=bounds" },
          { title: "The Great Gatsby", price: "4,6$", img: "https://content.img-gorod.ru/pim/products/images/f0/8a/0191cabc-d7b2-7a10-b796-ba269c7ff08a.jpg?width=0&height=1200&fit=bounds" },
          { title: "The Picture of Dorian Gray", price: "6$", img: "https://content.img-gorod.ru/pim/products/images/eb/f7/019112b7-b672-7119-888e-841c6b2aebf7.jpg?width=0&height=1200&fit=bounds" },
          { title: "Martin Eden", price: "6$", img: "https://content.img-gorod.ru/pim/products/images/06/cb/01904354-7e28-7dd6-b9ff-f6acb57206cb.jpg?width=0&height=1200&fit=bounds" },
          { title: "The Picture of Dorian Gray", price: "5,7$", img: "https://content.img-gorod.ru/pim/products/images/3d/23/01900abd-b933-715d-8d49-1c5c04c33d23.jpg?width=0&height=1200&fit=bounds" },
          { title: "The Great Gatsby", price: "5$", img: "https://content.img-gorod.ru/pim/products/images/8a/2c/019125ff-2674-7024-a54b-f214fe0c8a2c.jpg?width=0&height=1200&fit=bounds" },
          { title: "Dracula", price: "7,5$", img: "https://content.img-gorod.ru/pim/products/images/ed/81/0192180e-6eee-7cb2-b3ce-f5c73944ed81.jpg?width=0&height=1200&fit=bounds" },
          { title: "Frankenstein", price: "6$", img: "https://content.img-gorod.ru/pim/products/images/a4/67/0194fdfc-dd19-7a5f-b104-42abd458a467.jpg?width=0&height=1200&fit=bounds" },
          { title: "Anne of Green Gables", price: "5,9$", img: "https://content.img-gorod.ru/pim/products/images/05/78/0193d361-12a4-7c05-b203-8824f1b00578.jpg?width=0&height=1200&fit=bounds" },
          { title: "The Lost World", price: "7$", img: "https://content.img-gorod.ru/pim/products/images/64/43/01948793-59c4-723e-a1aa-f69f55316443.jpg?width=0&height=1200&fit=bounds" },
        ].map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.img} alt={book.title} />
            <div className="book-title">{book.title}</div>
            <div className="book-price">{book.price}</div>
            <button className="buy-btn">Buy</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Catalog;
