import { useEffect } from "react";
import styled from "styled-components";
import ComingSoon from "./ComingSoon";
import NowPlaying from "./NowPlaying";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Popular from "./Popular";
import TopRated from "./TopRated";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import TheMovieDbSource from "../data/themoviedb-source";

const Home = (props) => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  let nowPlaying = [];
  let upComing = [];
  let popular = [];
  let topRated = [];

  useEffect(
    async function fetchData() {
      nowPlaying.push(await TheMovieDbSource.nowPlayingMovies());
      upComing.push(await TheMovieDbSource.upcomingMovies());
      popular.push(await TheMovieDbSource.popularMovies());
      topRated.push(await TheMovieDbSource.topRatedMovies());
      dispatch(
        setMovies({
          nowPlaying: nowPlaying,
          upComing: upComing,
          popular: popular,
          topRated: topRated,
        })
      );
    },
    [userName]
  );

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <NowPlaying />
      <Popular />
      <ComingSoon />
      <TopRated />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  background: linear-gradient(to bottom, #141b29, #0c111b 300px);
  padding-bottom: 45px;

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
