import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

// const HomeScreen = ({navigation}) => {
//     return(
//         <View>
//             <Text>Home screen eat shit!</Text>
//             <Button title="News" onPress={() => navigation.navigate("NewsScreen")}/>
//             <Button title="The Club" onPress={() => navigation.navigate("BioScreen")}/>
//             <Button title="Training Schedule" onPress={() => navigation.navigate("TrainingScreen")}/>
//             <Button title="Events Calendar" onPress={() => navigation.navigate("EventsScreen")}/>
//             <Button title="Contacts" onPress={() => navigation.navigate("ContactsScreen")}/>
//         </View>
//     )
// }

const NewsScreen = () => {
    return(
        <View>
            <Text>News screen eat shit!</Text>
        </View>
    )
}

const BioScreen = () => {
    return(
        <View>
            <Text>Bio screen eat shit!</Text>
        </View>
    )
}


const TrainingScreen = () => {
    return(
        <View>
            <Text>Training screen eat shit!</Text>
        </View>
    )
}

const EventsScreen = () => {
    return(
        <View>
            <Text>Events screen eat shit!</Text>
        </View>
    )
}


const ContactsScreen = () => {
    return(
        <View>
            <Text>Contacts screen eat shit!</Text>
        </View>
    )
}


const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="NewsScreen" component={NewsScreen}/>
            <Stack.Screen name="BioScreen" component={BioScreen}/>
            <Stack.Screen name="TrainingScreen" component={TrainingScreen}/>
            <Stack.Screen name="EventsScreen" component={EventsScreen}/>
            <Stack.Screen name="ContactsScreen" component={ContactsScreen}/>
        </Stack.Navigator>
    );
}

export default HomeNavigator;
