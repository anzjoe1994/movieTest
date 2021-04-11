import api from "api";

export const REQUEST_DASHBOARD_SECTION_ONE_DATA = "REQUEST_DASHBOARD_SECTION_ONE_DATA";
export const RECEIVE_DASHBOARD_SECTION_ONE_DATA = "RECEIVE_DASHBOARD_SECTION_ONE_DATA";
export const REQUEST_DASHBOARD_SECTION_TWO_DATA = "REQUEST_DASHBOARD_SECTION_TWO_DATA";
export const RECEIVE_DASHBOARD_SECTION_TWO_DATA = "RECEIVE_DASHBOARD_SECTION_TWO_DATA";
export const REQUEST_DASHBOARD_SECTION_THREE_DATA = "REQUEST_DASHBOARD_SECTION_THREE_DATA";
export const RECEIVE_DASHBOARD_SECTION_THREE_DATA = "RECEIVE_DASHBOARD_SECTION_THREE_DATA";

export function requestDashboardSectionOneData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_ONE_DATA,
  };
}

export function receiveDashboardSectionOneData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_ONE_DATA,
    data,
    error
  };
}

function fetchDashboardSectionOneData(text) {
  return async (dispatch) => {
    dispatch(requestDashboardSectionOneData());
    try {
      const json = await api.getSearchData(text);
      return dispatch(receiveDashboardSectionOneData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionOneData(null, error));
    }
  };
}

function shouldFetchDashboardSectionOneData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionOneFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionOneDataIfNeeded(text) {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionOneData(getState())) {
      return dispatch(fetchDashboardSectionOneData(text));
    }
  };
}



export function requestDashboardSectionTwoData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_TWO_DATA,
  };
}

export function receiveDashboardSectionTwoData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_TWO_DATA,
    data,
    error
  };
}

function fetchDashboardSectionTwoData(text) {
  return async (dispatch) => {
    dispatch(requestDashboardSectionTwoData());
    try {
      const json = await api.getSearchData(text);
      return dispatch(receiveDashboardSectionTwoData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionTwoData(null, error));
    }
  };
}

function shouldFetchDashboardSectionTwoData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionTwoFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionTwoDataIfNeeded(text) {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionTwoData(getState())) {
      return dispatch(fetchDashboardSectionTwoData(text));
    }
  };
}


export function requestDashboardSectionThreeData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_THREE_DATA,
  };
}

export function receiveDashboardSectionThreeData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_THREE_DATA,
    data,
    error
  };
}

function fetchDashboardSectionThreeData(text) {
  return async (dispatch) => {
    dispatch(requestDashboardSectionThreeData());
    try {
      const json = await api.getSearchData(text);
      return dispatch(receiveDashboardSectionThreeData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionThreeData(null, error));
    }
  };
}

function shouldFetchDashboardSectionThreeData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionThreeFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionThreeDataIfNeeded(text) {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionThreeData(getState())) {
      return dispatch(fetchDashboardSectionThreeData(text));
    }
  };
}