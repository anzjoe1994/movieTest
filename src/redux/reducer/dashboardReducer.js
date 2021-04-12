import { 
  REQUEST_DASHBOARD_SECTION_ONE_DATA, 
  RECEIVE_DASHBOARD_SECTION_ONE_DATA,
  REQUEST_DASHBOARD_SECTION_TWO_DATA, 
  RECEIVE_DASHBOARD_SECTION_TWO_DATA,
  REQUEST_DASHBOARD_SECTION_THREE_DATA, 
  RECEIVE_DASHBOARD_SECTION_THREE_DATA,
  REQUEST_DASHBOARD_SEARCH_DATA, 
  RECEIVE_DASHBOARD_SEARCH_DATA,
  SET_DASHBOARD_SEARCH_DATA_EMPTY   
} from "../action/dashboardAction";


export default function dashboardReducer(
  state = {
    isSectionOneFetching: false,
    sectionOneArray: [],
    isSectionTwoFetching: false,
    sectionTwoArray: [],
    isSectionThreeFetching: false,
    sectionThreeArray: [],
    isSearchFetching: false,
    searchDataArray: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_DASHBOARD_SECTION_ONE_DATA:
      return Object.assign({}, state, {
        isSectionOneFetching: true,
      });
    case RECEIVE_DASHBOARD_SECTION_ONE_DATA:

      return Object.assign({}, state, {
        isSectionOneFetching: false,
        sectionOneArray: action.data || state.data,
        error: action.error,
      });
      case REQUEST_DASHBOARD_SECTION_TWO_DATA:
      return Object.assign({}, state, {
        isSectionTwoFetching: true,
      });
    case RECEIVE_DASHBOARD_SECTION_TWO_DATA:

      return Object.assign({}, state, {
        isSectionTwoFetching: false,
        sectionTwoArray: action.data || state.data,
        error: action.error,
      });
      case REQUEST_DASHBOARD_SECTION_THREE_DATA:
      return Object.assign({}, state, {
        isSectionThreeFetching: true,
      });
    case RECEIVE_DASHBOARD_SECTION_THREE_DATA:

      return Object.assign({}, state, {
        isSectionThreeFetching: false,
        sectionThreeArray: action.data || state.data,
        error: action.error,
      });
      case REQUEST_DASHBOARD_SEARCH_DATA:
      return Object.assign({}, state, {
        isSearchFetching: true,
      });
    case RECEIVE_DASHBOARD_SEARCH_DATA:

      return Object.assign({}, state, {
        isSearchFetching: false,
        searchDataArray: action.data || state.data,
        error: action.error,
      });
      case SET_DASHBOARD_SEARCH_DATA_EMPTY:

      return Object.assign({}, state, {
        isSearchFetching: false,
        searchDataArray: []
      });
    default:
      return state;
  }
}
