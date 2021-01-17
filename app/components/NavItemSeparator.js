import React from 'react';
import {View,StyleSheet} from "react-native";

function NavItemSeparator(props) {
    return (
        <View style={styles.separator}/>
    );
}

const styles = StyleSheet.create({
    separator:{
        width: '100%',
        height: 1,
        backgroundColor: "gray"
    }
})

export default NavItemSeparator;
