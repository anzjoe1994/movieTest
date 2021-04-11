import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView
} from "react-native";
import { connect } from "react-redux";

import { 
  fetchDashboardSectionOneDataIfNeeded, 
  fetchDashboardSectionTwoDataIfNeeded, 
  fetchDashboardSectionThreeDataIfNeeded  
} from "action/dashboardAction";
import { string } from "assets/strings";
import {
  white,
  windowBackgroundGrey,
  blackColor
} from "constants/Colors";
import { Section } from "./Section";


function Dashboard({
  dispatch,
  navigation,
  isSectionOneFetching,
  sectionOneArray,
  isSectionTwoFetching,
  sectionTwoArray,
  isSectionThreeFetching,
  sectionThreeArray
}) {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = React.useState("");


  React.useEffect(() => {
    dispatch(fetchDashboardSectionOneDataIfNeeded('batman'));
    dispatch(fetchDashboardSectionTwoDataIfNeeded('harry potter'));
    dispatch(fetchDashboardSectionThreeDataIfNeeded('james bond'));
  }, []);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={{ fontSize: 20, color: blackColor, fontWeight: 'bold', alignSelf: 'center', margin: 16 }}>
        {string("dashboard.title")}
      </Text>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
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

function SearchBar({ searchText, setSearchText }) {
  return (
    <View activeOpacity={0.8} style={styles.searchContainer}>
      {/* <Image source={images.search} /> */}
      <TextInput
        style={styles.textInput}
        placeholder={string("dashboard.searchPlaceholder")}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        clearButtonMode={'always'}
        selectionColor={'#AFA6CB'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: white,
  },
  searchContainer: {
    height: 40,
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: windowBackgroundGrey,
    marginBottom: 20,
    paddingHorizontal: 16
  },
  textInput: {
    flex: 1,
    marginHorizontal: 8
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
    sectionThreeArray
  } = dashboardReducer;
  return {
    isSectionOneFetching,
    sectionOneArray,
    isSectionTwoFetching,
    sectionTwoArray,
    isSectionThreeFetching,
    sectionThreeArray
  };
}
export default connect(mapStateToProps)(Dashboard);
