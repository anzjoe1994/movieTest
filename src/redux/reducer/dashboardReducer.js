import { REQUEST_DASHBOARD_DATA, RECEIVE_DASHBOARD_DATA } from "../action/dashboardAction";


export default function dashboardReducer(
  state = {
    isFetching: false,
    movieArray: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_DASHBOARD_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_DASHBOARD_DATA:

      return Object.assign({}, state, {
        isFetching: false,
        movieArray: action.data || state.data,
        error: action.error,
      });
    default:
      return state;
  }
}
