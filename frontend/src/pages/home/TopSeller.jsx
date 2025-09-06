import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

const categories = ["Choose a genre", "Business", "Fiction", "adventure"];

const TopSeller = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  return (
    <div className="py-10">
      <h2 className=" text-3xl font-semibold mb-6">Top Seller</h2>
      <div>
        <select
          name="category"
          id="category"
          className="px-4 py-2 outline-none border bg-[#eaeaea] border-gray-300 rounded-md"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>
      {filteredBooks.map((book, index) => {
        return <BookCard key={index} book={book} />;
      })}
    </div>
  );
};

export default TopSeller;
