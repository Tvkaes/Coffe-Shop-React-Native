import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from "./app/navigations/Navigations";
import {firebaseApp} from "./app/utils/firebase"
import {LogBox} from "react-native"

LogBox.ignoreLogs(["Setting a timer"]);
export default function App() {

  return (
    <Navigation></Navigation>
  );
}
