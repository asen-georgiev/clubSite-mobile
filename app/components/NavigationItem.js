import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image, TouchableHighlight} from "react-native";


function NavigationItem(props) {
    return (
       <TouchableHighlight
       onPress={props.onPress}
       underlayColor="aquamarine">
           <View style={styles.container}>
               {props.IconComponent}
               <View style={styles.detailsContainer}>
                   <Text style={styles.navItemTitle}>{props.navItemTitle}</Text>
               </View>
           </View>
       </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
    },
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },
    navItemTitle: {
        fontWeight: 'bold'
    }
})
export default NavigationItem;
