import React, {useState} from 'react'
import { StyleSheet,View,Text } from 'react-native'
import {Input,Button} from "react-native-elements"
import * as firebase from "firebase"

export default function ChangeName(props) {
    const {displayName,setShowModal,toastRef, setReloadUser} = props
    const [newDisplayName, setNewDisplayName] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = () =>{
        setError(null)
        if (!newDisplayName){
            setError("El nobmre no puede estar vacio")
        } else if(displayName == newDisplayName) {
            setError("el nombre no puede ser igual al anterior")
        }else{
            setIsLoading(true)
            const update={
                displayName:newDisplayName
            }
            firebase.auth().currentUser.updateProfile(update)
            .then(()=>{
                setIsLoading(false)
                setReloadUser(true )
                setShowModal(false)
                console.log(" ok") 
            })
            .catch(()=>{
                setError("error al actualizar el nombre")
                setIsLoading(false)
            })
        }
        
    }

    return(
        <View style={styles.view}>
            <Input placeholder="Name and LastName" containerStyle={styles.input}
            defaultValue={displayName && displayName} 
            onChange={e => setNewDisplayName(e.nativeEvent.text)}
            errorMessage={error}
            ></Input>
            <Button title="Change Name" 
            containerStyle={styles.btnContainer} 
            buttonStyle={styles.btn}
            onPress={onSubmit}
            loading={isLoading}
            ></Button>
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