import { 
  REQUEST_DASHBOARD_SECTION_ONE_DATA, 
  RECEIVE_DASHBOARD_SECTION_ONE_DATA,
  REQUEST_DASHBOARD_SECTION_TWO_DATA, 
  RECEIVE_DASHBOARD_SECTION_TWO_DATA,
  REQUEST_DASHBOARD_SECTION_THREE_DATA, 
  RECEIVE_DASHBOARD_SECTION_THREE_DATA   
} from "../action/dashboardAction";


export default function dashboardReducer(
  state = {
    isSectionOneFetching: false,
    sectionOneArray: [],
    isSectionTwoFetching: false,
    sectionTwoArray: [],
    isSectionThreeFetching: false,
    sectionThreeArray: []
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
    default:
      return state;
  }
}
