import { StyleSheet, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';

const assets = [
  require("../assets/3.jpg"),
  require("../assets/2.jpg"),
  require("../assets/4.jpg"),
  require("../assets/5.jpg"),
  require("../assets/1.jpg"),
];

const { width, height } = Dimensions.get("window");

const Swiper = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {assets.map((source) => (
          <View key={source} style={styles.picture}>
            <Image style={styles.image} {...{ source }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Swiper;

const styles = StyleSheet.create({
  picture: {
    width,
    height,
    overflow: "hidden",
  },
  pictures: {
    width: width * assets.length,
    height,
    flexDirection: 'row'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});