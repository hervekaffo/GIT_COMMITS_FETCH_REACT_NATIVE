import React, { useState} from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import axios from "axios";


const Commits = (props) => {
  const [commits, setCommits] = useState([]);

  //api call
  axios
    .get(`https://api.github.com/repos/mojombo/grit/commits`)
    .then((res) => {
      setCommits(res.data);
    })
    .catch((error) => {
      console.log('Api call error')
    })



  return (
    <ScrollView>
          <View style={styles.container}>

            {commits? 
                commits.map((commit)=>(
                    <View style={{marginBottom:30}}>
                        <Text>{commit.author.avatar_url}</Text> 
                        <Text>{commit.commit.author.name}</Text>
                        <Text>{commit.commit.message}</Text> 
                    </View>
                ))
            :<Text>No Commits found</Text> }
            {/* <Text>{commit.author.avatar_url}</Text>
            <Text>{commit.commit.author.name}</Text>
            <Text>{commit.sha}</Text>
            <Text>{commit.commit.message}</Text> */}
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    marginBottom: 160,
    backgroundColor: "white",
  }
});

export default Commits;
