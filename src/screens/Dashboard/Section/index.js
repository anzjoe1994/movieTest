import React from "react";
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from "react-native";
import { string } from "assets/strings";
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {
    blackColor
  } from "constants/Colors";
import CellItem from '../CellItem'
export function Section({ heading, array, navigation, isFetching }) {
    function renderItem({ item }) {
        return (
            <CellItem
                data={item}
                onPress={() => {
                    navigation.navigate("MovieDetail", { data: 'item' });
                }}
            />
        )
    }
    
    return (
        <View style={styles.section}>
            <Text style={styles.sectionHeader}>
                {heading}
            </Text>
            {isFetching ? (
                <View style={styles.listContainer}>
                    <ShimmerPlaceHolder style={styles.cellShimmerContainer} />
                    <ShimmerPlaceHolder style={styles.cellShimmerContainer} />
                    <ShimmerPlaceHolder style={styles.cellShimmerContainer} />
                </View>
            ) : (array && array.length > 0 ? (<FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.listContainer}
                data={array}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.imdbID.toString()}
            />) : (<Text style={styles.emptyMessage}>
                {string("dashboard.noData")}
            </Text>))}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    cellShimmerContainer: {
        height: 180,
        width: 140,
        marginVertical: 8,
        marginLeft: 16,
        borderRadius: 10,
        shadowColor: blackColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
    },
    section: {
        height: 240,
        marginBottom: 16
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