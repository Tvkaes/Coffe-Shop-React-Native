import React from 'react';
import { StyleSheet,View,Text } from 'react-native';
import {Avatar} from "react-native-elements";
import * as firebase from "firebase"
import * as Permissions from "expo-permissions"
import * as ImagePicker from "expo-image-picker"

export default function InfoUser(props){
    const {userInfo:{uid, photoUrl, displayName, email}, toastRef} = props
    const changeAvatar = async () =>{
        const resultPermission = await Permissions.askAsync(Permissions.CAMERA)
        const resultPermissionCamera = resultPermission.permissions.camera.status
        
        if (resultPermissionCamera === "denied"){
            toastRef.current.show("Acepta los permisos puta")
        } else{
            const result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing:true,
                aspect:[4,3]
            })
            if(result.cancelled){
                toastRef.current.show("cerraste la seleccion de imagenes")
            }else{
                uploadImage(result.uri)
                .then(() => {
                    updatePhotoUrl()
                })
                .catch(() => { toastRef.current.show("error al acutalizar")})

            }
        }

    }
    const uploadImage = async(uri) =>{
        const response = await fetch(uri)
        const blob = await response.blob()
        
        const ref =firebase.storage().ref().child(`avatar/${uid}`)
        return ref.put(blob)
    }
    const updatePhotoUrl = () =>{
        firebase
           .storage()
           .ref(`avatar/${uid}`)
           .getDownloadURL()
           .then(async (response) => {
            const update = {
                photoURL:response
            }
            await firebase.auth().currentUser.updateProfile(update)
            console.log("imagen actualizada") 
            
        })
    }

    return(
        <View style={styles.viewUserInfo}>
            <Avatar
            rounded
            size="large"
            showEditButton
            onEditPress={changeAvatar}
            containerStyle={styles.userInfoAvatar}
            source={
                photoUrl ? {uri:photoUrl} : require("../../../assets/avatar-default.jpg")
            }
            ></Avatar>
            <View>
                <Text style={styles.displayName}>{displayName ? displayName :"Anonymous"}</Text>
                <Text>{email ? email : "Anonymous"}</Text>
            </View>
        </View>
    )
}
const styles =StyleSheet.create({
    viewUserInfo:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor:"#f2f2f2",
        paddingBottom:30,
        paddingTop:30,

    },
    userInfoAvatar:{
        marginRight:20,
    },
    displayName:{
        fontWeight:"bold",
        paddingBottom:5,
    }
})