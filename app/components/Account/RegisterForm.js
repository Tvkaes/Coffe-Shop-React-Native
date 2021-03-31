import React,{useState} from "react";
import {StyleSheet , View} from "react-native";
import {Input,Icon,Button} from "react-native-elements";
import {validateEmail} from "../../utils/validations";
import Loading from "../Loading";
import {size, isEmpty} from "lodash";
import {NavigationContainer, useNavigation} from "@react-navigation/native"
import * as firebase from "firebase";


export default function RegisterForm(props){
    const { toastRef } = props;
    const navigation=useNavigation();
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);
    const [formData, setFormData] = useState(defaultFormValue());
    const [loading, setLoading] = useState(false);
    
      var onSubmit = () => {
        if (
          isEmpty(formData.email) ||
          isEmpty(formData.password) ||
          isEmpty(formData.repeatPassword)
        ) {
          toastRef.current.show("All fields are required")
        } else if(!validateEmail(formData.email)) {
          toastRef.current.show("Email is not correct")
        } else if (formData.password !== formData.repeatPassword) {
          toastRef.current.show("The password must be the same")
        } else if (size(formData.password) < 6) {
          toastRef.current.show(
            "Password must contain 6 or more characters"
          )
        } else {
          setLoading(true);
          firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password).then(() => {
              setLoading(false);
              navigation.navigate("account")
            })
            .catch(() => {
              setLoading(false)
              toastRef.current.show("The email address is already in use by another account")
            });
        }
      };

     const onChange = (e, type) =>{
         setFormData({...setFormData,[type]: e.nativeEvent.text});
     }
    return(
        
        <View style={styles.formContainer}>
            <Input 
            placeholder="Email." 
            containerStyle={styles.inputForm} 
            onChange={(e) => onChange(e, "email")}
            rightIcon={<Icon type="ionicon" name="mail-outline" iconStyle={styles.iconRight}/>}
            />

            <Input
             placeholder="Password"
             containerStyle={styles.inputForm}
             password={true}
             secureTextEntry={showPassword ? false : true}
             onChange={(e) => onChange(e, "password")}
             rightIcon={
              <Icon
               type="ionicon"
               name={showPassword ? "eye-off-outline" : "eye-outline"}
               iconStyle={styles.iconRight}
               onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
             <Input
             placeholder="Repeat Password"
             containerStyle={styles.inputForm}
             password={true}
             secureTextEntry={showRepeatPassword ? false : true}
             onChange={(e) => onChange(e, "repeatPassword")}
             rightIcon={
              <Icon
               type="ionicon"
               name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
               iconStyle={styles.iconRight}
               onPress={() => setShowRepeatPassword(!showRepeatPassword)}
            />
          }
        />
            <Button title="Sign Up" containerStyle={styles.btnContainerRegister} onPress={onSubmit}></Button>
            <Loading isVisible={loading} text="Creando cuenta" />
        </View>
    );
}
function defaultFormValue() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  }
const styles = StyleSheet.create({
    formContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5,
    },
    inputForm:{
        width:"90%",
        marginTop:20,
    },
    btnContainerRegister:{
        marginTop:20,
        width:"90%",
        
    },
    iconRight:{
        color:"#c1c1c1"
    }

})