import React, { useState} from "react";
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Container,  Header, Content, Card, CardItem, Text, Body} from "native-base";

const CommitDetails = (props) => {
    const [item, setItem] = useState(props.route.params.item);

  return (
      <ScrollView style={{ padding: 10 }}>
        <View style={styles.imgCont}>
          <Image
            source={{
              uri: item.author.avatar_url,
            }}
            style={styles.image}
          />
        </View> 
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>{item.commit.author.name}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                {item.commit.message}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>{item.sha}</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  imgCont: {
      alignItems: "center"
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 400/ 2

    },
  });
  

export default CommitDetails;
