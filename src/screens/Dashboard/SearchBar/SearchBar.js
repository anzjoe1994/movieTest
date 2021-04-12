import React from "react";
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    FlatList
} from "react-native";
import PropTypes from 'prop-types';

import images from "assets/images";
import { string } from "assets/strings";
import {
    white,
    blackColor,
    windowBackgroundGrey
} from "constants/Colors";
import SearchItem from '../SearchItem'
function SearchBar({ searchText, setSearchText, isFetching, searchData, searchArray, onPress }) {
    function renderItem({ item }) {
        return (
            <SearchItem
                data={item}
                onPress={()=>onPress(item)}
            />
        )
    }
    return (
        <>
            <View activeOpacity={0.8} style={styles.searchContainer}>
                <Image source={images.search} style={{width:25, height:25}} />
                <TextInput
                    style={styles.textInput}
                    placeholder={string("search.searchPlaceholder")}
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                    clearButtonMode={'always'}
                    selectionColor={'#AFA6CB'}
                />
                {searchText.length > 3 && (<View style={styles.viewContainer}>
                    {isFetching ?
                        (<ActivityIndicator style={styles.loader} size='small' color={"#522360"} />)
                        :
                        (<TouchableOpacity style={styles.button}
                            onPress={() => searchData(searchText)}>
                            <Text style={{ color: blackColor, fontWeight: 'bold' }}>
                                {string("search.search")}
                            </Text>
                        </TouchableOpacity>)}

                    {!isFetching && searchArray && searchArray.length > 0 ? (<FlatList
                        showsVerticalScrollIndicator={false}
                        style={styles.listContainer}
                        contentContainerStyle={styles.contentContainerStyle}
                        data={searchArray}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={(item) => item.imdbID.toString()}
                    />) : (<Text style={styles.emptyMessage}>
                        {string("dashboard.noData")}
                    </Text>)}
                </View>)}
            </View>
            {searchText.length > 3 && (<View style={styles.background} />)}
        </>

    );
}
const styles = StyleSheet.create({

    searchContainer: {
        zIndex: 999,
        height: 40,
        justifyContent: "center",
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        borderWidth: 1,
        borderColor: windowBackgroundGrey,
        marginBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: white
    },
    textInput: {
        flex: 1,
        marginHorizontal: 8
    },
    background: {
        zIndex: 998,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: blackColor,
        opacity: 0.4
    },
    viewContainer: {
        zIndex: 998,
        position: 'absolute',
        top: 40,
        left: 10,
        right: 10,
        backgroundColor: white,
        height: 300
    },
    button: {
        borderRadius: 4,
        borderColor: blackColor,
        width: 80,
        borderWidth: 1,
        alignSelf: 'flex-end',
        height: 30,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader: {
        width: 80,
        alignSelf: 'flex-end',
        height: 30,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listContainer: {
        flex: 1
    },
    emptyMessage: {
        color: '#A1A1A1',
        fontSize: 12,
        alignSelf: 'center',
        marginTop: 100
    },
    contentContainerStyle: {
        paddingBottom: 16
    }
});

SearchBar.propTypes = {
    text: PropTypes.string.isRequired,
    setText: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};


export default SearchBar;