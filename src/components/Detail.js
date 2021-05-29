import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TheMovieDbSource from "../data/themoviedb-source";
import CONFIG from "../globals/config";
import "../style/circle.css";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [rating, setRating] = useState(0);
  const [year, setYear] = useState(null);
  const [date, setDate] = useState(null);
  const [language, setLanguage] = useState(null);
  const [genre, setGenre] = useState(null);
  const [duration, setDuration] = useState(null);
  let data = null;

  useEffect(async () => {
    data = await TheMovieDbSource.detailMovie(id);
    setDetailData(data);
    getYear();
    getDate();
    getRating();
    getLanguage();
    getGenres();
    getDuration();
    console.log(data);
  }, [id]);

  const getRating = () => {
    const rateElement = document.querySelector(".rating");
    const rate = data.vote_average * 10;
    let rateClass = null;
    rateClass = "p" + rate;
    rateElement.classList.add(rateClass);
    setRating(rate);
  };

  const getYear = () => {
    const date = new Date(data.release_date);
    const year = date.getFullYear();
    setYear(year);
  };

  const getDate = () => {
    const date = new Date(data.release_date);
    const day = date.getDate();
    let month = date.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    const year = date.getFullYear();
    setDate(day + "/" + month + "/" + year);
  };

  const getLanguage = () => {
    const languages = data.spoken_languages;
    const languageElement = languages.map((language) => {
      return <div className="language-item">{language.english_name}</div>;
    });
    setLanguage(languageElement);
  };

  const getGenres = () => {
    const genres = data.genres;
    const genreElement = genres.map((genre) => {
      return <div className="genre-item">{genre.name}</div>;
    });
    setGenre(genreElement);
  };

  const getDuration = () => {
    const duration = data.runtime;
    const minutes = 60;
    const hours = () => {
      let total = duration / 60;
      return parseInt(total);
    };
    setDuration(hours() + "h " + minutes + "m");
  };

  return (
    <Container>
      <Background
        style={{
          backgroundImage:
            "url(" + CONFIG.BASE_IMAGE_URL + detailData.backdrop_path + ")",
        }}
      ></Background>

      <Wrapper>
        <Image>
          <img
            alt={detailData.title}
            src={CONFIG.BASE_IMAGE_URL + detailData.poster_path}
          ></img>
        </Image>
        <ContentMeta>
          <Title>
            <h1>{detailData.title}</h1>
            <span> ({year})</span>
          </Title>
          <SubTitle>
            {date} • <div className="language">{language}</div> •{" "}
            <div className="genre">{genre}</div> • {duration}
          </SubTitle>
          <Action>
            <Rating className="rating c100 small green">
              <span>{rating}%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </Rating>
            <UsrRating>
              <h3>User</h3>
              <h3>Score</h3>
            </UsrRating>
            <AddList>
              <span />
              <span />
            </AddList>
            <GroupWatch>
              <div>
                <img src="/images/group-icon.png" alt="" />
              </div>
            </GroupWatch>
          </Action>
          <Tagline>{detailData.tagline}</Tagline>
          <Description>
            <div className="title">Overview</div>
            <div className="content">{detailData.overview}</div>
          </Description>
          <Controls>
            <Player>
              <img src="/images/play-icon-black.png" alt="" />
              <span>Play</span>
            </Player>
            <Trailer>
              <img src="/images/film-icon.png" alt="" />
              <span>Trailer</span>
            </Trailer>
          </Controls>
        </ContentMeta>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 135px;
  height: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    top: 50px;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: flex-start;
  width: 290px;
  min-width: 200px;
  padding-right: 16px;
  img {
    width: 100%;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
    margin-bottom: 50px;
    width: 200px;
    min-width: 0;
  }
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 874px;
  padding: 0 16px;
`;

const Title = styled.div`
  h1 {
    cursor: pointer;
    margin: 0;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
    display: inline;
  }

  span {
    opacity: 0.8;
    font-weight: 400;
    font-size: 32px;
  }
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  .language {
    display: inline-block;

    .language-item {
      display: inline-block;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }

      :not(:last-child) {
        ::after {
          content: ", ";
          white-space: pre;
        }
      }
    }
  }

  .genre {
    display: inline-block;

    .genre-item {
      display: inline-block;
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }

      :not(:last-child) {
        ::after {
          content: ", ";
          white-space: pre;
        }
      }
    }
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const Rating = styled.div``;

const UsrRating = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  font-size: 14px;

  h3 {
    margin: 0;
  }
`;

const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #141b29;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }

    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 360px) {
    margin-top: 10px;
  }
`;

const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #141b29;
  transition: 0.2s;

  div {
    height: 40px;
    width: 40px;
    background: #141b29;
    border-radius: 50%;

    img {
      width: 100%;
    }
  }

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 360px) {
    margin-top: 10px;
  }
`;

const Tagline = styled.div`
  margin-bottom: 0;
  font-size: 17, 6px;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;
`;

const Description = styled.div`
  .title {
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
  }
  .content {
    font-size: 16px;
    line-height: 1.3;
    text-align: justify;
    color: rgb(249, 249, 249);
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  margin: 24px 0px;
  min-height: 56px;

  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
  }
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);
  transition: 0.2s;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(165 165 165);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  transition: 0.2s;

  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export default Detail;
