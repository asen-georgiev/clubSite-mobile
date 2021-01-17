import React from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from "react-native";

function AppButton(props) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:props.backgroundColor}]}
                          onPress={props.onPress}>
            <Text style={[styles.text,{color:props.color}]}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor:'gold',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width:'100%'
    },
    text:{
        color: "darkgray",
        fontSize: 15,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default AppButton;
