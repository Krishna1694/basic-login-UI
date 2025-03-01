import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'

const Signup = () => {
  const router = useRouter();
  const toregister = () => {
    router.replace("/login");
  };
  return (
    <View style={{ flex:1, alignItems:"center" }}>
      <Image source={require("@/assets/images/signup.png")} style={{
        width:"100%" ,
        height: 350,
      }} 
      resizeMode="contain"
      />
      <Text style = {{fontSize : 20, fontWeight : 700, color : "black"}}>
        This is the signup page
      </Text>
      <View style={{
        paddingHorizontal:30,
        paddingVertical:10,
        gap:20,
        alignItems:"center"
      }}>
      <TextInput placeholder='Enter your name' 
      style={ styles.Txtip } 
      />
      <TextInput placeholder='Enter your email' 
      style={ styles.Txtip } 
      />
      <TextInput placeholder='Enter your password' 
      style={ styles.Txtip } 
      />
      <TextInput placeholder='re-enter your password' 
      style={ styles.Txtip } 
      />
      <MyButton title={"Register"} onPress={toregister}/>
    </View>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({
  Txtip:{
    borderWidth:1, borderRadius:8, paddingHorizontal:10, height:40, width:400
  }
});