import React from "react";
import {StyleSheet , View} from "react-native";
import {Input,Icon,Button} from "react-native-elements";


export default function RegisterForm(){
    return(
        <View style={styles.formContainer}>
            <Input placeholder="Email." containerStyle={styles.inputForm} ></Input>
            <Input placeholder="Password." containerStyle={styles.inputForm} password={true}></Input>
            <Input placeholder="Repeat Password." containerStyle={styles.inputForm} password={true}></Input>
            <Button title="Sign Up" containerStyle={styles.btnContainerRegister}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    formContainer:{
        marginTop:30,
    },
    inputForm:{
        width:"100%",
        marginTop:20,
    },
    btnContainerRegister:{
        marginTop:20,
        width:"96%"
    }

})