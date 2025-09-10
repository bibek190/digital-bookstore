import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// import required modules
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCard from "../books/BookCard";

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h2 className=" text-3xl font-semibold mb-6">Recommended</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {books.length > 0 &&
          books.slice(8, 16).map((book, index) => {
            return (
              <SwiperSlide>
                <BookCard key={index} book={book} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Recommended;
