import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Favorites from "../screens/Home";

const Stack = createStackNavigator();
export default function FavoritesStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Favorites} options={{title:"Favorites"}}></Stack.Screen>
        </Stack.Navigator>
    )
}