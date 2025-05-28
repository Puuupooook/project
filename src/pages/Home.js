import React, { useState } from "react";
import "./Home.css";

import book from "../assets/book.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";

import { motion } from "framer-motion";

const slides = [
{
title: "Best Place to Find\nYour Favorite\nBooks.",
books: [book, book2],
},
{
title: "Discover New\nAdventures\nEvery Day.",
books: [book3, book4],
},
{
title: "Dive Into\nClassics\nAnd More.",
books: [book5, book6],
},
];

const booksData = [
{
title: "Three Men in a Boat",
author: "Jerome K. Jerome",
img: "https://content.img-gorod.ru/pim/products/images/5e/6c/01906232-73a3-7d1e-8d72-5c7a7a145e6c.jpg?width=608&height=867&fit=bounds",
desc: "A humorous account of a boating holiday on the Thames between Kingston and Oxford.",
},
{
title: "The Great Gatsby",
author: "F. Scott Fitzgerald",
img: "https://content.img-gorod.ru/pim/products/images/f0/8a/0191cabc-d7b2-7a10-b796-ba269c7ff08a.jpg?width=0&height=1200&fit=bounds",
desc: "A classic novel of the Jazz Age, exploring themes of decadence, idealism, and excess.",
},
{
title: "The Picture of Dorian Gray",
author: "Oscar Wilde",
img: "https://content.img-gorod.ru/pim/products/images/eb/f7/019112b7-b672-7119-888e-841c6b2aebf7.jpg?width=608&height=867&fit=bounds",
desc: "A story about vanity, moral duplicity, and the consequences of living a double life.",
},
{
title: "Martin Eden",
author: "Jack London",
img: "https://content.img-gorod.ru/pim/products/images/06/cb/01904354-7e28-7dd6-b9ff-f6acb57206cb.jpg?width=608&height=867&fit=bounds",
desc: "An ambitious young writer struggles to rise above his working-class origins.",
},
{
title: "Dracula",
author: "Bram Stoker",
img: "https://content.img-gorod.ru/pim/products/images/f5/b3/0190aa55-39ec-7ba2-beac-860b7273f5b3.jpg?width=608&height=867&fit=bounds",
desc: "The classic Gothic horror novel that introduced Count Dracula to the world.",
},
{
title: "Frankenstein",
author: "Mary Shelley",
img: "https://content.img-gorod.ru/pim/products/images/a4/67/0194fdfc-dd19-7a5f-b104-42abd458a467.jpg?width=608&height=867&fit=bounds",
desc: "A chilling tale of science, ambition, and the monstrous consequences of man's hubris.",
},
{
title: "Anne of Green Gables",
author: "L. M. Montgomery",
img: "https://content.img-gorod.ru/pim/products/images/05/78/0193d361-12a4-7c05-b203-8824f1b00578.jpg?width=608&height=867&fit=bounds",
desc: "The beloved story of a spirited orphan girl finding a home on Prince Edward Island.",
},
{
title: "The Lost World",
author: "Arthur Conan Doyle",
img: "https://content.img-gorod.ru/pim/products/images/64/43/01948793-59c4-723e-a1aa-f69f55316443.jpg?width=608&height=867&fit=bounds",
desc: "An expedition to a plateau in the Amazon basin where prehistoric animals still survive.",
},
];

export default function HomePageSliderReact() {
const [currentSlide, setCurrentSlide] = useState(0);
const [randomBook, setRandomBook] = useState(booksData[0]);

const handlePrev = () => {
setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
};

const handleNext = () => {
setCurrentSlide((prev) => (prev + 1) % slides.length);
};

const recommendBook = () => {
const randomIndex = Math.floor(Math.random() * booksData.length);
setRandomBook(booksData[randomIndex]);
};

return (
<>
<div className="slider">
<div className="slider-nav">
<button onClick={handlePrev}>&#10094;</button>
<button onClick={handleNext}>&#10095;</button>
</div>
{slides.map((slide, index) => (
<div className={`slide ${index === currentSlide ? "active" : ""}`} key={index}>
<div className="header-text">
{slide.title.split("\n").map((line, i) => (
<div key={i}>{line}</div>
))}
</div>
<div className="header-books">
{slide.books.map((imgSrc, i) => (
<div className="book-cover" key={i}>
<img src={imgSrc} alt={`Book ${i + 1}`} />
</div>
))}
</div>
</div>
))}
</div>

{/* анимация */}
<div className="row">
<motion.div
className="card"
whileHover={{ scale: 1.1 }}
transition={{ type: "spring", stiffness: 300 }}
>
An easy way to<br />please your friends...
</motion.div>

<motion.div
className="card"
whileHover={{ scale: 1.1 }}
transition={{ type: "spring", stiffness: 300 }}
>
Books of this month
</motion.div>
</div>

<div className="randomizer-container">
<div className="random-book-cover">
<img
src={randomBook.img}
alt={`${randomBook.title} cover`}
id="randomBookImg"
/>
</div>
<div className="random-book-info">
<div className="random-book-title" id="randomBookTitle">
{randomBook.title}
</div>
<div className="random-book-author" id="randomBookAuthor">
by {randomBook.author}
</div>
<div className="random-book-desc" id="randomBookDesc">
{randomBook.desc}
</div>
</div>
<button className="randomizer-btn" onClick={recommendBook}>
Recommend a book
</button>
</div>
</>
);
}