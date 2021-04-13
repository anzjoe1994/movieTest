import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import {
  fetchDashboardSectionOneDataIfNeeded,
  fetchDashboardSectionTwoDataIfNeeded,
  fetchDashboardSectionThreeDataIfNeeded,
  fetchDashboardSearchDataIfNeeded,
  setDashboardSearchDataEmpty
} from "action/dashboardAction";
import { string } from "assets/strings";
import {
  white,
  blackColor
} from "constants/Colors";
import { Section } from "./Section";
import SearchBar from "./SearchBar"

function Dashboard({
  dispatch,
  navigation,
  isSectionOneFetching,
  sectionOneArray,
  isSectionTwoFetching,
  sectionTwoArray,
  isSectionThreeFetching,
  sectionThreeArray,
  isSearchFetching,
  searchDataArray
}) {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(fetchDashboardSectionOneDataIfNeeded('batman'));
    dispatch(fetchDashboardSectionTwoDataIfNeeded('harry potter'));
    dispatch(fetchDashboardSectionThreeDataIfNeeded('james bond'));
  }, []);
  function searchData(text) {
    dispatch(fetchDashboardSearchDataIfNeeded(text));
  }
  function setSearchingData(text) {
    setSearchText(text)
    if (text.length <= 3) {
      dispatch(setDashboardSearchDataEmpty());
    }
  }
  function searchDataOnPress(item) {
    setSearchText('')
    dispatch(setDashboardSearchDataEmpty());
    navigation.navigate("MovieDetail", { data: item });
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>
        {string("dashboard.title")}
      </Text>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchingData}
        isFetching={isSearchFetching}
        searchData={searchData}
        searchArray={searchDataArray}
        onPress={searchDataOnPress}
      />
      <ScrollView>
        <>
          <Section
            heading={string("dashboard.batman")}
            array={sectionOneArray}
            navigation={navigation}
            isFetching={isSectionOneFetching} />
          <Section
            heading={string("dashboard.harryPotter")}
            array={sectionTwoArray}
            navigation={navigation}
            isFetching={isSectionTwoFetching} />
          <Section
            heading={string("dashboard.jamesBond")}
            array={sectionThreeArray}
            navigation={navigation}
            isFetching={isSectionThreeFetching} />
        </>
      </ScrollView>


    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: white,
  },
  title: {
    fontSize: 20,
    color: blackColor,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 16
  }

});
function mapStateToProps(state) {
  const { dashboardReducer } = state;
  const {
    isSectionOneFetching,
    sectionOneArray,
    isSectionTwoFetching,
    sectionTwoArray,
    isSectionThreeFetching,
    sectionThreeArray,
    isSearchFetching,
    searchDataArray
  } = dashboardReducer;
  return {
    isSectionOneFetching,
    sectionOneArray,
    isSectionTwoFetching,
    sectionTwoArray,
    isSectionThreeFetching,
    sectionThreeArray,
    isSearchFetching,
    searchDataArray
  };
}
export default connect(mapStateToProps)(Dashboard);
