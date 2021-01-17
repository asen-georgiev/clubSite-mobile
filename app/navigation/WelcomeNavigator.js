import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";


const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    return(
    <View>
        <Text>Home screen eat shit!</Text>
    </View>
    )
}

const NewsScreen = () => {
    return(
        <View>
            <Text>News screen eat shit!</Text>
        </View>
    )
}

function WelcomeNavigator(props) {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: "pink",
                activeTintColor: "lightyellow",
                inactiveBackgroundColor: "lightyellow",
                inactiveTintColor: "grey"
            }}
        >
            <Tab.Screen
                name="Welcome"
                component={NewsScreen}
            options={{
                tabBarIcon: () => <Icon
                name="ios-albums"
                size={25}
                color="gray"/>
            }}/>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            options={{
                tabBarIcon: () => <Icon
                    name="trail-sign"
                    size={25}
                    color="grey"/>
            }}/>
        </Tab.Navigator>
    );
}

export default WelcomeNavigator;
