import React,{useRef,useState,useEffect} from "react";
import {View,Text,StyleSheet} from "react-native";
import {Button} from "react-native-elements"
import Toast from "react-native-easy-toast"
import * as firebase from "firebase";
import Loading from "../../components/Loading"
import InfoUser from "../../components/Account/infoUser"

export default function UserLogged(){
    const [userInfo,setUserInfo] = useState(null)
    const [loading,setLoading] = useState(false);
    const [loadingText,setLoadingText] = useState("");
    const toastRef=useRef();

    useEffect(() => {
        (async () =>{
            const user = await firebase.auth().currentUser;
            setUserInfo(user);
        })()
    }, [])
    return(
        <View style={styles.viewUserInfo}>
            {userInfo && <InfoUser userInfo={userInfo} toastRef={toastRef}></InfoUser>}
            <Text>Settings</Text>
            <Button title="Log out" 
             onPress={() => firebase.auth().signOut()}
             buttonStyle={styles.btnLogout}
             titleStyle={styles.btnLogoutText}
            ></Button>
            <Toast ref={toastRef} position="center" opacity={0.9}></Toast>
            <Loading text={loadingText} isVisible={loading}></Loading>
        </View>
    )
}

const styles = StyleSheet.create({
    viewUserInfo:{
        minHeight:"100%",
        backgroundColor:"#f2f2f2"
    },
    btnLogout:{
        marginTop:30,
        borderRadius:0,
        backgroundColor:"#C5A880",
        borderTopWidth:1,
        borderTopColor:"#e3e3e3",
        paddingTop:10,
        paddingBottom:10,
    },
    btnLogoutText:{
        color:"#e3e3e3"
    }

})