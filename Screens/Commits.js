import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Header, Item, Input } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import CommitList from "../Components/CommitList";

import axios from "axios";

var { height, width } = Dimensions.get("window");

const ListHeader = () => {
  return (
    <View elevation={1} style={styles.listHeader}>
      <View style={styles.headerItem}></View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: "600" }}>Author</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: "600" }}>Hash</Text>
      </View>
      <View style={styles.headerItem}>
        <Text style={{ fontWeight: "600" }}>Message</Text>
      </View>
    </View>
  );
};

const Commits = (props) => {
  const [commits, setCommits] = useState([]);
  const [commitsFilter, setCommitsFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/mojombo/grit/commits`)
      .then((res) => {
        setCommits(res.data);
        setCommitsFilter(res.data);
        setLoading(false);
      });
    return () => {
      setCommits([]);
      setCommitsFilter([]);
      setLoading(false);
    };
  }, []);

  const searchCommits = (text) => {
    if (text == "") {
      setCommitsFilter(commits);
    }
    setCommitsFilter(
      commits.filter((i) =>
        i.commit.author.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View></View>
        <View>
          <Header searchBar rounded>
            <Item style={{ padding: 5 }}>
              <Icon name="search" />
              <Input
                placeholder="search"
                onChangeText={(text) => searchCommits(text)}
              />
            </Item>
          </Header>
        </View>

        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="green" />
          </View>
        ) : (
          <FlatList
            data={commitsFilter}
            ListHeaderComponent={ListHeader}
            renderItem={({ item, index }) => (
              <CommitList
                {...item}
                navigation={props.navigation}
                index={index}
              />
            )}
            keyExtractor={(item) => item.sha}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "gainsboro",
  },
  headerItem: {
    margin: 3,
    width: width / 5,
  },
  spinner: {
    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    marginBottom: 160,
    backgroundColor: "white",
  },

});

export default Commits;
