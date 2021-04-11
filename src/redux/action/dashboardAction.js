import api from "api";

export const REQUEST_DASHBOARD_DATA = "REQUEST_DASHBOARD_DATA";
export const RECEIVE_DASHBOARD_DATA = "RECEIVE_DASHBOARD_DATA";

export function requestDashboardData() {
  return {
    type: REQUEST_DASHBOARD_DATA,
  };
}

export function receiveDashboardData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_DATA,
    data,
    error
  };
}

function fetchDashboardData() {
  return async (dispatch) => {
    dispatch(requestDashboardData());
    try {
      const json = await api.getDashboardData();
      return dispatch(receiveDashboardData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardData(null, error));
    }
  };
}

function shouldFetchDashboardData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchDashboardData(getState())) {
      return dispatch(fetchDashboardData());
    }
  };
}
