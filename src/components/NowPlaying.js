import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNowPlaying } from "../features/movie/movieSlice";
import CONFIG from "../globals/config";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NowPlaying = (props) => {
  const movies = useSelector(selectNowPlaying);
  let settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 8,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const slider = document.querySelector(".nowPlayingSlider");
    const childContent = slider.querySelector(".slick-list");
    const track = childContent.querySelector(".slick-track");
    if (track) {
      setTimeout(() => {
        track.style.transform = "translate3d(0px, 0px, 0px)";
      });
    }
  });

  return (
    <Container>
      <h4>Recomended for you</h4>
      <Content {...settings} className="nowPlayingSlider">
        {movies &&
          movies[0].map((movie, key) => (
            <Wrap key={key}>
              <Link to={`/detail/` + movie.id}>
                <img
                  src={CONFIG.BASE_IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 16px;
  h4 {
    font-size: 20px;
    margin: 0;
    padding: 10px 0;
  }
`;

const Content = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }

  &:hover {
    button {
      opacity: 1;
      transition: opacity 1s ease 0s;
    }
  }

  .slick-list {
    position: relative;
    overflow: initial;
  }

  .slick-slide {
    padding-right: 5px;
    &:not(:first-child) {
      padding-left: 5px;
    }
  }

  .slick-arrow {
    z-index: 1;
    height: 100%;
    width: 50px;
    &::before {
      font-size: 45px;
    }
  }

  .slick-prev {
    left: -73px;
    width: calc(calc(100vw - 165px) / 20);
    background: linear-gradient(
      to left,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
    &::before {
      content: "❮";
    }
  }

  .slick-next {
    right: -73px;
    width: calc(calc(100vw - 165px) / 20);
    background: linear-gradient(
      to right,
      transparent,
      rgba(12, 17, 27, 0.7),
      rgba(12, 17, 27, 0.9)
    );
    &::before {
      content: "❯";
    }
  }

  .slick-disabled {
    opacity: 0% !important;
  }
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  z-index: 1;

  img {
    display: block;
    object-fit: cover;
    opacity: 1;
    position: relative;
    border-radius: 7px;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    top: 0;
  }

  &:hover {
    transform: scale(1.3);
    transition-delay: 0.3s;
    z-index: 2;
  }
`;

export default NowPlaying;
