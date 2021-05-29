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
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <div className="wrapper">
            <div className="content-holder">
              <div className="title">The Falcon and The Winter Soldier</div>
              <div className="meta-data">
                <span>Disney</span>
                <span>Action</span>
              </div>
              <div className="description">
                “The Falcon” and Bucky Barnes aka “The Winter Soldier” team up
                on a global adventure that tests their abilities and their
                patience.
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/images/falcon.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="wrapper">
            <div className="content-holder">
              <div className="title">The Walking Dead</div>
              <div className="meta-data">
                <span>Star World</span>
                <span>English</span>
                <span>Drama</span>
              </div>
              <div className="description">
                FIRST 3 EPISODES FREE. Wounded in the line of duty, small-town
                Georgia sheriff Rick Grimes wakes from a coma to find the world
                infested by zombie-like "walkers."
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/images/walking-dead.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="wrapper">
            <div className="content-holder">
              <div className="title">Grey's Anatomy</div>
              <div className="meta-data">
                <span>ABC Studios</span>
                <span>English</span>
                <span>Drama</span>
              </div>
              <div className="description">
                The medical drama follows the personal and professional lives of
                the doctors at Seattle's Grey Sloan Memorial Hospital.
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/images/greys-anatomy.png" alt="" />
          </div>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <div className="wrapper">
            <div className="content-holder">
              <div className="title">Marvel's Agents of S.H.I.E.L.D.</div>
              <div className="meta-data">
                <span>Marvel</span>
                <span>English</span>
                <span>Action</span>
              </div>
              <div className="description">
                WATCH THE COMPLETE SEASONS 1-7. Agent Phil Coulson leads a team
                of highly skilled agents from the S.H.I.E.L.D. Together, they
                combat extraordinary and inexplicable threats.
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/images/agents-of-shield.png" alt="" />
          </div>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <div className="wrapper">
            <div className="content-holder">
              <div className="title">Criminal Minds</div>
              <div className="meta-data">
                <span>ABC Studios</span>
                <span>English</span>
                <span>Drama</span>
              </div>
              <div className="description">
                An elite team of FBI profilers analyse the country’s most
                twisted criminal minds, anticipating their next moves before
                they strike again.
              </div>
            </div>
          </div>
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

    .wrapper {
      position: relative;
      display: inline-block;
      border-radius: 5px 0px 0px 5px;
      background-color: #030b17;
      .content-holder {
        @media screen and (min-width: 800px) {
          display: block;
        }
        display: none;
        position: absolute;
        top: 66px;
        left: 50px;
        min-width: 370px;
        z-index: 999;
        .title {
          font-size: 28px;
          color: #fff;
          font-weight: 600;
          height: auto;
        }

        .meta-data {
          font-size: 16px;
          font-weight: 500;
          padding-top: 10px;
          color: rgba(255, 255, 255, 0.6);

          span {
            &:not(:last-child) {
              &::after {
                content: "●";
                font-family: "fontawesome-hotstar";
                font-size: 6px;
                font-style: normal;
                text-decoration: none;
                padding: 6px;
                vertical-align: middle;
              }
            }
          }
        }

        .description {
          font-size: 16px;
          padding-top: 10px;
          padding-right: 40px;
          line-height: 28px;
          color: rgba(255, 255, 255, 0.8);
        }
      }
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
