import React from 'react';
import {Button, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import WelcomeNavigator from "../navigation/WelcomeNavigator";
import AppButton from "../components/AppButton";

function WelcomeScreen({navigation}) {
    return (
        <React.Fragment>
            <ImageBackground
                style={styles.background}
                source={require("../assets/background.jpg")}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require("../assets/favicon.png")}/>
                        <Text style={styles.tagline}>Welcome to WARRIORS karate dojo</Text>
                    <AppButton
                        backgroundColor="navy"
                        color="white"
                        title="To the home page"
                        onPress={() => navigation.navigate('WelcomeNavigator')}/>
                </View>
            </ImageBackground>
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:'center'
    },
    logo:{
        width: 100,
        height: 100
    },
    logoContainer:{
        top:70,
        alignItems: 'center'
    },
    tagline: {
        fontSize: 15,
        color: 'red',
        fontWeight: "bold",
        paddingVertical: 20
    }
})
export default WelcomeScreen;
