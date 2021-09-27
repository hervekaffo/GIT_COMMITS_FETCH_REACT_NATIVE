import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

// Importing the didderent screens Stacks
import HomeNavigator from "./HomeNavigator";
import UserNavigator from "./UserNavigator";
import CommitsNavigator from "./CommitsNavigator";

//creating the bottom navigator with the different stacks
const Tab = createBottomTabNavigator();

const Main = () => {

  return (
    <Tab.Navigator
      initialRouteName="Commits"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: true,
        activeTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Commits"
        component={CommitsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="github" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
