import {
    REQUEST_MOVIE_DETAIL_DATA,
    RECEIVE_MOVIE_DETAIL_DATA,
    CLEAR_MOVIE_DETAIL_DATA

} from "../action/movieDetailAction";


export default function dashboardReducer(
    state = {
        isMovieDetailFetching: false,
        movieDetail: null,
    },
    action
) {
    switch (action.type) {
        case REQUEST_MOVIE_DETAIL_DATA:
            return Object.assign({}, state, {
                isMovieDetailFetching: true,
            });
        case RECEIVE_MOVIE_DETAIL_DATA:

            return Object.assign({}, state, {
                isMovieDetailFetching: false,
                movieDetail: action.data || state.data,
                error: action.error,
            });
        case CLEAR_MOVIE_DETAIL_DATA:

            return Object.assign({}, state, {
                isMovieDetailFetching: false,
                movieDetail: null
            });
        default:
            return state;
    }
}
