import api from "api";

export const REQUEST_MOVIE_DETAIL_DATA = "REQUEST_MOVIE_DETAIL_DATA";
export const RECEIVE_MOVIE_DETAIL_DATA = "RECEIVE_MOVIE_DETAIL_DATA";
export const CLEAR_MOVIE_DETAIL_DATA = "CLEAR_MOVIE_DETAIL_DATA";

export function requestMovieDetailData() {
  return {
    type: REQUEST_MOVIE_DETAIL_DATA,
  };
}

export function receiveMovieDetailData(data, error) {
  

  return {
    type: RECEIVE_MOVIE_DETAIL_DATA,
    data,
    error
  };
}

function fetchMovieDetailData(id) {
  return async (dispatch) => {
    dispatch(requestMovieDetailData());
    try {
      const json = await api.getMovieDetailData(id);
      return dispatch(receiveMovieDetailData(json, null));
    } catch (error) {
      return dispatch(receiveMovieDetailData(null, error));
    }
  };
}

function shouldFetchMovieDetailData(state) {
  const movieDetailData = state.movieDetailReducer;
  if (!movieDetailData) {
    return true;
  } else if (movieDetailData.isMovieDetailFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchMovieDetailDataIfNeeded(id) {
  return (dispatch, getState) => {
    if (shouldFetchMovieDetailData(getState())) {
      return dispatch(fetchMovieDetailData(id));
    }
  };
}
export function clearMovieDetailData() {
  return {
    type: CLEAR_MOVIE_DETAIL_DATA,
  };
}


