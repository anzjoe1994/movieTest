import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList
} from "react-native";
import { connect } from "react-redux";

import { fetchDashboardDataIfNeeded } from "action/dashboardAction";
import { string } from "assets/strings";
import {
  white,
  windowBackgroundGrey,
} from "constants/Colors";
import { blackColor } from "../../constants/Colors";


function Dashboard({
  dispatch,
  navigation, isFetching,
  movieArray }) {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = React.useState("");


  React.useEffect(() => {
    dispatch(fetchDashboardDataIfNeeded());
  }, []);
  function renderItem({ item }) {
    return (
      <CellItem
        data={item}
        onPress={() => {
          navigation.navigate("MovieDetail", { data: 'nn' });
        }}
      />
    );
  }
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>
          {string("dashboard.batman")}
        </Text>
        {!isFetching &&
          (movieArray && movieArray.length > 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.listContainer}
              data={movieArray}
              renderItem={(item) => renderItem(item)}
              keyExtractor={(item) => item.imdbID.toString()}
            />
          ) : (
            <Text style={styles.emptyMessage}>
              {string("dashboard.noData")}
            </Text>
          ))}
      </View>

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
function CellItem({ data, onPress }) {
  return (
    <View style={styles.cellContainer}>
      <TouchableOpacity
        style={styles.itemContainer}
        activeOpacity={1}
        onPress={onPress}
      >
        <Text>
          {data.Title}
          </Text>
        <Text>
          {data.Year}
          </Text>
      </TouchableOpacity>
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
  },
  listContainer: {
    flex: 1,
    backgroundColor: white
  },
  cellContainer: {
    marginBottom: 2,
    width: 140,
    flexDirection: "row",
    backgroundColor: '#F1F3F6',
    marginVertical: 8,
    marginLeft: 16,
    borderRadius: 10,
    shadowColor: blackColor,
    shadowOffset: {width:0,height:0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 18,
    paddingRight: 28,
    paddingVertical: 20
  },
  section: {
    height: 240
  },
  sectionHeader: {
    color: blackColor,
    fontSize: 18,
    marginHorizontal: 16,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  emptyMessage: {
    color: '#A1A1A1',
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 100
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
