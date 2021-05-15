import { useEffect } from "react";
import styled from "styled-components";
import ComingSoon from "./ComingSoon";
import NowPlaying from "./NowPlaying";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Originals from "./Originals";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import TheMovieDbSource from "../data/themoviedb-source";

const Home = (props) => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  let nowPlaying = [];
  let upComing = [];

  useEffect(async () => {
    nowPlaying.push(await TheMovieDbSource.nowPlayingMovies());
    upComing.push(await TheMovieDbSource.upcomingMovies());
    dispatch(
      setMovies({
        nowPlaying: nowPlaying,
        upComing: upComing,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <NowPlaying />
      <ComingSoon />
      <Originals />
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
  background: linear-gradient(
    180deg,
    rgba(18, 25, 38, 1) 12%,
    rgba(0, 0, 0, 1) 100%
  );

  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
