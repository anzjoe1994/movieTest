const tintColorLight = "#FF6B6B";
const tintColorDark = "#fff";
export const primaryColor = "#FF6B6B";
export const primaryDarkColor = "#EF5452";
export const primaryLightColor = "#FF7C7C";
export const windowBackground = "#fff";
export const windowBackgroundGrey = "#F2F2F2";
export const white = "#fff";
export const red = "#FF0000";
export const textColor = "#6C6D6D";
export const textColorDark = "#6F6F6F";
export const textColorLight = "#C8C8C8";
export const primaryPink = "#FFF1F1";
export const blackColor = "#343434";
export const warmGrey = "#707070";
export const greyishBrown = '#535353'
export const warmGreyLight = '#959595'

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#fff",
    tabIconSelected: tintColorLight,
    inactiveBackgroundColor: primaryDarkColor,
    activeBackgroundColor: white,
    activeTintColor: "#522360",
    inactiveTintColor: "#A1A1A1",
    tabStyle: {
      paddingVertical: 3,
    },
    labelStyle: {
      fontFamily: "bold",
      fontSize: 10,
    },
    style: {
      // height: 56,
    },
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorLight,
    tabIconDefault: "#fff",
    tabIconSelected: tintColorLight,
    inactiveBackgroundColor: primaryDarkColor,
    activeBackgroundColor: white,
    activeTintColor: "#A1A1A1",
    inactiveTintColor: "#522360",
    tabStyle: {
      paddingVertical: 3,
    },
    labelStyle: {
      fontFamily: "bold",
      fontSize: 10,
    },
    style: {
      height: 56,
    },
  },
};
