import React,{useRef} from "react";
import {StyleSheet,ScrollView,View,Text,Image} from "react-native";
import {Divider} from "react-native-elements";
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import LoginForm from "../../components/Account/LoginForm";
import Toast from "react-native-easy-toast";

export default function Login(){
   const toastRef =useRef();
    return (
        <ScrollView>
            <Image
            source={require("../../../assets/logo.png")}
            resizeMode="contain"
            style={styles.logo}
            ></Image>
            <View style={styles.viewContainer}>
                <LoginForm toastRef={toastRef}></LoginForm>
                <CreateAccount></CreateAccount>
            </View>
            <Divider style={styles.divider}/>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </ScrollView>
    );
}

function CreateAccount(){
    const navigation=useNavigation()
    return(
        <Text style={styles.textRegister}>Dont have any account?{" "}
              <Text style={styles.btnRegister} onPress={() =>navigation.navigate("register")}>Sign Up Here!
              </Text>  
        </Text>
    );
} 

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 200,
        marginTop:20,
    },
    viewContainer:{
        marginRight:40,
        marginLeft:40,
    },
    textRegister:{
        marginLeft:10,
        marginRight:10,
        marginTop:15,
    },
    btnRegister:{
       color:"#20A7FF",
       fontWeight:"bold"
    },
    divider:{
        margin:30,
        backgroundColor:"#C5A880"

    }
})


