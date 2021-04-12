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
function CellItem({ data, onPress }) {
    const preview = { uri: data.Poster };
    const uri = data.Poster;

    return (
        <View style={styles.cellContainer}>
            <View style={styles.imageContainer}
            >
                <Image
                    {...{preview, uri}}

                    style={styles.image}
                    resizeMode={'stretch'}
                />
            </View>

            <TouchableOpacity
                style={styles.itemContainer}
                activeOpacity={1}
                onPress={onPress}
            >

                <Text style={styles.year}>
                    {data.Year}
                </Text>

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({

    cellContainer: {
        marginBottom: 2,
        width: 140,
        flexDirection: "row",
        backgroundColor: '#F1F3F6',
        marginVertical: 8,
        marginLeft: 16,
        borderRadius: 10,
        shadowColor: blackColor,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 4,
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'flex-end'
    },
    imageContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    image: {
        flex: 1,
        borderRadius: 10,
    },
    year: {
        fontSize: 14,
        color: white,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
    }
});

CellItem.propTypes = {
    data: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
};


export default CellItem;