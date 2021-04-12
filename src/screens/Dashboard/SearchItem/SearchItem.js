import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from "react-native";
import PropTypes from 'prop-types';
import { Image } from "react-native-expo-image-cache";
import {
    white,
    blackColor
} from "constants/Colors";
function SearchItem({ data, onPress }) {
    const preview = { uri: data.Poster };
    const uri = data.Poster;

    return (
        <View style={styles.cellContainer}>
            <TouchableOpacity
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={onPress}
            >
                <Image
                    {...{ preview, uri }}

                    style={styles.image}
                    resizeMode={'stretch'}
                />
                <View style={styles.textContainer}
                >
                    <Text style={styles.year} numberOfLines={1}>
                        {data.Title}
                    </Text>
                    <Text style={styles.year}>
                        {data.Year}
                    </Text>
                </View>


            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    cellContainer: {
        height: 60,
        flexDirection: "row",
        borderTopColor: '#F1F3F6',
        borderTopWidth: 2,
        alignItems:'center'
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 16
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 5,
    },
    year: {
        fontSize: 14,
        color: blackColor,
        fontWeight: 'bold'
    }
});

SearchItem.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};


export default SearchItem;