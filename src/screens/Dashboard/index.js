import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from "react-native";
import { connect } from "react-redux";

import { fetchDashboardDataIfNeeded } from "action/dashboardAction";



function Dashboard({
    dispatch,
  navigation }) {
  const insets = useSafeAreaInsets();
  React.useEffect(() => {
    dispatch(fetchDashboardDataIfNeeded());
  }, []);
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity onPress={() => {navigation.navigate("MovieDetail", { data: 'nn' })}}>
          <Text>
              "click"
          </Text>
      </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  }
});
function mapStateToProps(state) {
    const { dashboardReducer } = state;
    const {
      isFetching,
      movieArray } = dashboardReducer;
    return {
      isFetching,
      movieArray
    };
  }
export default connect(mapStateToProps)(Dashboard);
