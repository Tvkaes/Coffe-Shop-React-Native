import React,{useState} from "react";
import { StyleSheet,View,Text} from "react-native"
import {ListItem} from "react-native-elements"
import {map} from "lodash"
import Modal from "../Modal"
import ChangeName from "./ChangeName"


export default function AccountOptions(props) {
    const {userInfo,toastRef}=props;
    const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)
    
    const selectComponent = (key) =>{
        switch (key) {
            case "displayName":
                setRenderComponent(
                    <ChangeName 
                    displayName={userInfo.displayName}
                    setShowModal={setShowModal}
                    toastRef={toastRef}
                    >

                    </ChangeName>   
                )
                setShowModal(true)
                break;
            case "Email":
                setRenderComponent(
                    <Text></Text>    
                )
                setShowModal(true)
                break;
            case "Password":
                setRenderComponent(
                    <Text></Text>    
                )
                setShowModal(true)
                break;
        
            default: setRenderComponent(null)
                break;
        }
    }
    const menuOptions = generateOptions(selectComponent)
    return(
        <View>
            {map(menuOptions, (menu,index) =>(
                <ListItem 
                key={index} 
                title={menu.title}
                rightIcon={{type:menu.iconType, name:menu.iconNameRight,color:menu.iconColorright}}
                onPress={menu.onPress}
                ></ListItem>
            ))}
            {renderComponent && (
            <Modal isVisible={showModal} setIsVisible={setShowModal}>
                {renderComponent}
            </Modal>
            )}
            
        </View>
    )
}
function generateOptions(selectComponent) {
    return[
        {
            title:"Change Name and Last Name",
            iconType:"ionicon",
            iconNameRight:"chevron-forward-outline",
            iconColorRight:"#00000",
            onPress:() => selectComponent("displayName")
        },
        {
            title:"Change Email",
            iconType:"ionicon",
            iconNameRight:"chevron-forward-outline",
            iconColorRight:"#00000",
            onPress:() => selectComponent("Email")
        },
        {
            title:"Change Password",
            iconType:"ionicon",
            iconNameRight:"chevron-forward-outline",
            iconColorRight:"#00000",
            onPress:() => selectComponent("Password")
        }
    ]
}

const styles= StyleSheet.create({})