import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import images from "assets/images";
import { Image as BlurImage } from "react-native-expo-image-cache";
import { Shimmer as ShimmerPlaceHolder } from "component";
import { connect } from "react-redux";

import {
  fetchMovieDetailDataIfNeeded,
  clearMovieDetailData
} from "action/movieDetailAction";
import { string } from "assets/strings";
import {
  white,
  blackColor
} from "constants/Colors";
function MovieDetail({
  route,
  dispatch,
  navigation,
  isMovieDetailFetching,
  movieDetail
}) {
  const insets = useSafeAreaInsets();
  const { data } = route.params;
  const preview = { uri: data.Poster };
  const uri = data.Poster;
  useEffect(() => {
    dispatch(fetchMovieDetailDataIfNeeded(data.imdbID))
    return () => {
      dispatch(clearMovieDetailData())
  }
  }, []);
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={() => {
          navigation.goBack();
        }}>

          <Image source={images.back} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {string("movieDetail.title")}
        </Text>
      </View>
      <ScrollView>
        <>
          <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
              <BlurImage
                {...{ preview, uri }}

                style={styles.image}
                resizeMode={'stretch'}
              />
              {!!movieDetail && !isMovieDetailFetching ? (<Text style={styles.normalText}>
                {`${movieDetail.imdbVotes} ${string("movieDetail.votes")}`}
              </Text>) :
                <ShimmerPlaceHolder height={20} width={100} containerStyle={styles.normalText}/>
              }
            </View>
            <View style={styles.nameContainer}>
              <Text style={[styles.textPadding, styles.bigText]}>
                {data.Title}
              </Text>
              <Text style={[styles.textPadding, styles.bigText]}>
                {`(${data.Year})`}
              </Text>
              {!!movieDetail && !isMovieDetailFetching ? (<Text style={[styles.textPadding, styles.normalText]}>
                {`${string("movieDetail.rating")} ${movieDetail.imdbRating} ${string("movieDetail.star")}     ${movieDetail.Runtime}`}
              </Text>) :
                <ShimmerPlaceHolder height={20} width={100} containerStyle={styles.textPadding} />
              }
            </View>

          </View>
          <View style={styles.bottomContainer}>
            {!!movieDetail &&  !isMovieDetailFetching ? (<Text style={[styles.textPadding, styles.normalText]}>
              {`${string("movieDetail.genre")} ${movieDetail.Genre}`}
            </Text>):
                <ShimmerPlaceHolder height={20} width={100} containerStyle={styles.textPadding}/>
              }
            {!!movieDetail &&  !isMovieDetailFetching ? (<Text style={[styles.textPadding, styles.normalText]}>
              {`${string("movieDetail.director")} ${movieDetail.Director}`}
            </Text>):
                <ShimmerPlaceHolder height={20} width={100} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
              }
            {!!movieDetail && !isMovieDetailFetching ?  (<Text style={[styles.textPadding, styles.normalText]}>
              {`${string("movieDetail.writer")} ${movieDetail.Writer}`}
            </Text>):
            <>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
             </>
              }
            {!!movieDetail && !isMovieDetailFetching ?  (<Text style={[styles.textPadding, styles.normalText, { marginTop: 16 }]}>
              {`${string("movieDetail.desc")} ${movieDetail.Plot}`}
            </Text>):
            <>
               
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerBigPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
                <ShimmerPlaceHolder height={20} width={200} containerStyle={[styles.textPadding, styles.shimmerSmallPadding]}/>
              </>
              }
          </View>
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
  headerContainer: {
    height: 57,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: blackColor,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 16
  },
  back: {
    position: 'absolute',
    height: 35,
    width: 35,
    left: 20,
    top: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    marginBottom: 16,
    height: 170,
    width: 120
  },
  topContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16
  },
  imageContainer: {
    width: 120
  },
  normalText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: blackColor
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 32,
    color: blackColor
  },
  nameContainer: {
    flex: 1
  },
  textPadding: {
    marginRight: 8,
    marginLeft: 16
  },
  bottomContainer: {
    marginTop: 16
  },
  shimmerSmallPadding: {
    marginTop: 8,
    width: '100%'
  },
  shimmerBigPadding: {
    marginTop: 16
  }
});
function mapStateToProps(state) {
  const { movieDetailReducer } = state;
  const {
    isMovieDetailFetching,
    movieDetail
  } = movieDetailReducer;
  return {
    isMovieDetailFetching,
    movieDetail
  };
}
export default connect(mapStateToProps)(MovieDetail);
