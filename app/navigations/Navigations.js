import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "react-native-elements";

import HomeStack from "./HomeStack";
import DrinksStack from "./DrinksStack";
import FavoritesStack from "./FavoritesStack";
import AccountStack from "./AccountStack";


const Tab = createBottomTabNavigator();
export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                inactiveTintColor: "#A5A5A5",
                activeTintColor:"#573131"
            }}
            screenOptions={({route}) => ({
                tabBarIcon:({color}) => screenOptions(route,color),
            })}
            
            >
                <Tab.Screen name="Home" component={HomeStack} options={{title:"Home"}}></Tab.Screen>
                <Tab.Screen name="Drinks" component={DrinksStack} options={{title:"Drinks"}}></Tab.Screen>
                <Tab.Screen name="Favorites" component={FavoritesStack} options={{title:"Favorites"}}></Tab.Screen>
                <Tab.Screen name="Account" component={AccountStack} options={{title:"Account"}}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
function screenOptions(route, color){
    let iconName;
    switch(route.name){
        case "Home":
            iconName ="home-outline"
            break;
        case "Drinks":
            iconName ="cafe-outline"
            break;
        case "Favorites":
            iconName ="heart-outline"
            break;
        case "Account":
            iconName ="person-outline"
            break;

        default:
            break;
    }
    return(
        <Icon type="ionicon" name={iconName} size={22} color={color}/>
    )
}