import React from "react";
import {StyleSheet,View,Text,Image} from "react-native"
import RegisterForm from "../../components/Account/RegisterForm"
export default function Register(){
    return(
        <View>
            <Image
            source={require("../../../assets/logo.png")}
            resizeMode="contain"
            style={styles.logo}
            ></Image>
            <View style={styles.viewForm}>
                <RegisterForm></RegisterForm>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo:{
        width:"100%",
        height: 200,
        marginTop:20,
    },
    viewForm:{

    },
})