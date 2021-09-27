import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

var { width } = Dimensions.get("window");

const CommitList = (props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log(props)
        }}
        style={[
          styles.container,
          {
            backgroundColor: props.index % 2 == 0 ? "white" : "gainsboro",
          },
        ]}
      >
        <Image
          source={{
            uri: props.author.avatar_url,
          }}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {props.commit.author.name}
        </Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {props.sha}
        </Text>
        <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">
          {props.commit.message}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    width: width,
  },
  image: {
    borderRadius: 50,
    width: width / 6,
    height: 20,
    margin: 2,
  },
  item: {
    flexWrap: "wrap",
    margin: 3,
    width: width / 4,
  },
});

export default CommitList;
