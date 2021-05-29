import CONFIG from "./config";

const API_ENDPOINT = {
  NOW_PLAYING: [
    fetch(
      `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`
    ),
  ],
  UPCOMING: [
    fetch(
      `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=3`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=4`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=5`
    ),
  ],
  POPULAR: [
    fetch(
      `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=3`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=4`
    ),
  ],
  TOP_RATED: [
    fetch(
      `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`
    ),
    fetch(
      `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=3`
    ),
  ],
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
  CREDITS: (id) =>
    `${CONFIG.BASE_URL}movie/${id}/credits?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
