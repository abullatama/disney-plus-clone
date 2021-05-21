import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <div className="description"></div>
          <div className="image">
            <img src="/images/falcon.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="description"></div>
          <div className="image">
            <img src="/images/walking-dead.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="description"></div>
          <div className="image">
            <img src="/images/greys-anatomy.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="description"></div>
          <div className="image">
            <img src="/images/agents-of-shield.png" alt="" />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <div className="description"></div>
          <div className="image">
            <img src="/images/criminal-minds.png" alt="" />
          </div>
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
  }
  &:hover {
    button {
      opacity: 1;
      transition: opacity 0.9s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-arrow::before {
    font-size: 45px;
  }

  .slick-prev {
    left: -65px;
    &::before {
      content: "❮";
    }
  }

  .slick-next {
    right: -65px;
    &::before {
      content: "❯";
    }
  }
`;

const Wrap = styled.div`
  cursor: pointer;

  a {
    display: grid;
    grid-template-columns: 0.78fr auto;
    padding: 0 10px;
    cursor: pointer;
    @media screen and (min-width: 870px) {
      height: 400px;
    }

    .description {
      border-radius: 5px 0px 0px 5px;
      background-color: #030b17;
    }

    .image {
      @media screen and (min-width: 800px) {
        &:before {
          content: "";
          position: absolute;
          top: -4px;
          width: 200px;
          height: 100%;
          background: linear-gradient(to right, #030b17, rgba(0, 0, 0, 0));
        }
      }
      img {
        border-radius: 5px;
        height: 100%;
        width: 100%;
      }
    }

    &:hover {
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
