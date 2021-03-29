import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Drinks from "../screens/Drinks";

const Stack = createStackNavigator();
export default function DrinksStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Drinks} options={{title:"Drinks"}}></Stack.Screen>
        </Stack.Navigator>
    )
}