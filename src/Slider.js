import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination,Navigation } from "swiper/modules";

function Slider() {
  return (
    <div>
      {" "}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper"
        spaceBetween={25} // Adjust the space between cards as needed
        slidesPerView={3} // Number of cards to display by default
        breakpoints={{
            1024:{
slidesPerView:3,
            },
          768: {
            slidesPerView: 2, 
          },
          425: {
            slidesPerView: 1, 
          },
          375: {
            slidesPerView: 1, 
          },
          320: {
            slidesPerView: 1, 
          },
        }}
      >
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="BlogCard">
            <div className="BlogImage ">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1590595978583-3967cf17d2ea?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
              <div className="blogDate">2 days ago</div>
            </div>
            <div className="BlogType">Finance Investment</div>
            <div className="BlogTitle">
              Multi Asset Investment perks and Values
            </div>
            <div className="BlogParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              corporis illo deleniti amet debitis ipsam ad. Laborum dignissimos
              totam fugit.
            </div>
            <div className="BlogReadMore">Read More...</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}

export default Slider;
