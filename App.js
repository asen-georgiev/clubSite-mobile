import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {MaterialCommunityIcons} from'@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import Constants from "expo-constants";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import WelcomeNavigator from "./app/navigation/WelcomeNavigator";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStackNavigator} from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
  return (
      <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Welcome" component={WelcomeScreen}/>
              <Stack.Screen name="WelcomeNavigator" component={WelcomeNavigator}/>
            </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
