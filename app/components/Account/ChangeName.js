import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
import {Input,Button} from "react-native-elements"

export default function ChangeName(props) {
    const {displayName,setShowModal,toastRef} = props

    return(
        <View style={styles.view}>
            <Input placeholder="Name and LastName" containerStyle={styles.input}
            defaultValue={displayName && displayName}
            ></Input>
            <Button title="Change Name" containerStyle={styles.btnContainer} buttonStyle={styles.btn}></Button>
            
        </View>
    )
}
const styles = StyleSheet.create({
    view:{
        alignItems:"center",
        paddingTop:10,
        paddingBottom:10

    },
    input:{
        marginBottom:10,
    },
    btnContainer:{
        marginTop:20,
        width:"95%"

    },
    btn:{}


})