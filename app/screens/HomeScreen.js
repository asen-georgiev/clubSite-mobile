import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import {MaterialCommunityIcons} from'@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import NavigationItem from "../components/NavigationItem";
import NavItemSeparator from "../components/NavItemSeparator";


const navigationItems = [
    {
        navItemTitle: "News",
        icon: {
            name: "earth",
            backgroundColor: "navy"
        },
        targetScreen: "NewsScreen"
    },
    {
        navItemTitle: "The Club",
        icon: {
            name: "md-medal",
            backgroundColor: "navy"
        },
        targetScreen: "BioScreen"
    },
    {
        navItemTitle: "Training Schedule",
        icon: {
            name: "md-newspaper",
            backgroundColor: "navy"
        },
        targetScreen: "TrainingScreen"
    },
    {
        navItemTitle: "Events Calendar",
        icon: {
            name: "calendar",
            backgroundColor: "navy"
        },
        targetScreen: "EventsScreen"
    },
    {
        navItemTitle: "Contacts",
        icon: {
            name: "ios-people",
            backgroundColor: "navy"
        },
        targetScreen: "ContactsScreen"
    }
]

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={navigationItems}
                ItemSeparatorComponent={NavItemSeparator}
                keyExtractor={navItem => navItem.navItemTitle}
                renderItem={({item}) => (
                    <NavigationItem
                        navItemTitle={item.navItemTitle}
                        IconComponent={
                            <Icon
                                name={item.icon.name}
                                color={item.icon.backgroundColor}
                                size={50}
                            />
                        }
                        onPress={() => props.navigation.navigate(item.targetScreen)}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
      marginVertical: 10,
      backgroundColor:"yellow"
  }
})

export default HomeScreen;
