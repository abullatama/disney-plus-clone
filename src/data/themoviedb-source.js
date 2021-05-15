import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";
class TheMovieDbSource {
  static async nowPlayingMovies() {
    const nowPlaying = API_ENDPOINT.NOW_PLAYING;
    let resultArr = [];

    try {
      const result = await Promise.all([nowPlaying[0], nowPlaying[1]])
        .then((response) => {
          return Promise.all(response.map((values) => values.clone().json())); //cloning the body of json so that it can be read more than once
        })
        .then((response) => {
          return response.map((res) => {
            return res.results;
          });
        });
      resultArr = [].concat.apply([], result); //merging an array of arrays
      console.log(resultArr);
      return resultArr;
    } catch (error) {
      console.log(error);
    }
  }

  static async upcomingMovies() {
    const upComing = API_ENDPOINT.UPCOMING;
    let resultArr = [];

    try {
      const result = await Promise.all([
        upComing[0],
        upComing[1],
        upComing[2],
        upComing[3],
      ])
        .then((response) => {
          return Promise.all(response.map((values) => values.clone().json())); //cloning the body of json so that it can be read more than once
        })
        .then((response) => {
          return response.map((res) => {
            return res.results;
          });
        });
      resultArr = [].concat.apply([], result); //merging an array of arrays
      console.log(resultArr);
      return resultArr;
    } catch (error) {
      console.log(error);
    }
  }

  static async popularMovies() {
    const popular = API_ENDPOINT.POPULAR;
    let resultArr = [];

    try {
      const result = await Promise.all([popular[0], popular[1], popular[2]])
        .then((response) => {
          return Promise.all(response.map((values) => values.clone().json())); //cloning the body of json so that it can be read more than once
        })
        .then((response) => {
          return response.map((res) => {
            return res.results;
          });
        });
      resultArr = [].concat.apply([], result); //merging an array of arrays
      console.log(resultArr);
      return resultArr;
    } catch (error) {
      console.log(error);
    }
  }

  static async topRatedMovies() {
    const topRated = API_ENDPOINT.TOP_RATED;
    let resultArr = [];

    try {
      const result = await Promise.all([topRated[0], topRated[1], topRated[2]])
        .then((response) => {
          return Promise.all(response.map((values) => values.clone().json())); //cloning the body of json so that it can be read more than once
        })
        .then((response) => {
          return response.map((res) => {
            return res.results;
          });
        });
      resultArr = [].concat.apply([], result); //merging an array of arrays
      console.log(resultArr);
      return resultArr;
    } catch (error) {
      console.log(error);
    }
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}
export default TheMovieDbSource;
