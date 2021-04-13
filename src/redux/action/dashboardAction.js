import api from "api";

export const REQUEST_DASHBOARD_SECTION_ONE_DATA = "REQUEST_DASHBOARD_SECTION_ONE_DATA";
export const RECEIVE_DASHBOARD_SECTION_ONE_DATA = "RECEIVE_DASHBOARD_SECTION_ONE_DATA";
export const REQUEST_DASHBOARD_SECTION_TWO_DATA = "REQUEST_DASHBOARD_SECTION_TWO_DATA";
export const RECEIVE_DASHBOARD_SECTION_TWO_DATA = "RECEIVE_DASHBOARD_SECTION_TWO_DATA";
export const REQUEST_DASHBOARD_SECTION_THREE_DATA = "REQUEST_DASHBOARD_SECTION_THREE_DATA";
export const RECEIVE_DASHBOARD_SECTION_THREE_DATA = "RECEIVE_DASHBOARD_SECTION_THREE_DATA";
export const REQUEST_DASHBOARD_SEARCH_DATA = "REQUEST_DASHBOARD_SEARCH_DATA";
export const RECEIVE_DASHBOARD_SEARCH_DATA = "RECEIVE_DASHBOARD_SEARCH_DATA";
export const SET_DASHBOARD_SEARCH_DATA_EMPTY = "RECEIVE_DASHBOARD_SEARCH_DATA";

//SECTION ONE
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


//SECTION TWO
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

//SECTION THREE
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


//SEARCH
export function setDashboardSearchDataEmpty() {
  return {
    type: SET_DASHBOARD_SEARCH_DATA_EMPTY,
  };
}
export function requestDashboardSearchData() {
  return {
    type: REQUEST_DASHBOARD_SEARCH_DATA,
  };
}

export function receiveDashboardSearchData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SEARCH_DATA,
    data,
    error
  };
}

function fetchDashboardSearchData(text) {
  return async (dispatch) => {
    dispatch(requestDashboardSearchData());
    try {
      const json = await api.getSearchData(text);
      
      return dispatch(receiveDashboardSearchData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSearchData(null, error));
    }
  };
}

function shouldFetchDashboardSearchData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSearchFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSearchDataIfNeeded(text) {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSearchData(getState())) {
      return dispatch(fetchDashboardSearchData(text));
    }
  };
}