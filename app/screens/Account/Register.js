import React,{useRef} from "react";
import {StyleSheet,View,Image} from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Toast, {DURATION} from 'react-native-easy-toast';
import RegisterForm from "../../components/Account/RegisterForm"

export default function Register(){
    const toastRef=useRef();
    return(
        <KeyboardAwareScrollView>
            <Image
            source={require("../../../assets/logo.png")}
            resizeMode="contain"
            style={styles.logo}
            ></Image>
            <View style={styles.viewForm}>
                <RegisterForm toastRef={toastRef}></RegisterForm>
            </View>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </KeyboardAwareScrollView>
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