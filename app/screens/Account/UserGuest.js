import React from "react";
import {View, StyleSheet, ScrollView, Image, Text} from "react-native";
import {Button} from "react-native-elements"


export default function UserGuest(){
    return(
        <ScrollView centerContent={true} style={styles.viewBody}> 
            <Image source={require("../../../assets/Group3.png")}
            resizeMode="contain" style={styles.image}
            ></Image>
            <Text style={styles.title}>Log in for more details.</Text>
            <Text style={styles.description}>You can modify your personal 
            information and pay methods so make sure to have an account.</Text>
            <View style={styles.viewBtn}>
                <Button 
                buttonStyle={styles.btnStyle}
                containerStyle={styles.btnContainer}
                title={"Login"}
                ></Button>
            </View>
        </ScrollView>
    );
}

const styles= StyleSheet.create({
    viewBody:{
        marginLeft:50,
        marginRight:50,
        marginTop:40,
       
    },
    image:{
        height:300,
        width:"100%",
        marginBottom:15,
        marginTop:10,
    },
    title:{
        fontFamily:"sans-serif-thin",
        fontWeight:"bold",
        fontSize:19,
        marginBottom:20,
        textAlign:"center",   
    },
    description:{
        textAlign:"center",
        fontFamily:"sans-serif-thin",
        marginBottom:25,

    },
    viewBtn:{
        flex:1,
        alignItems:"center"  
    },
    btnStyle:{
        backgroundColor:"#C5A880"
    },
    btnContainer:{
        width:"70%",

    }
    

})