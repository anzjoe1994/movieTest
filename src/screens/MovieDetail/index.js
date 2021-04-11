import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View
} from "react-native";



function MovieDetail({
  route,
  navigation }) {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      

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


export default MovieDetail;
