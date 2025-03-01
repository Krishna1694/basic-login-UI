import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const tologin = () => {
    console.log(value, value1)

  };
  const tosignup = () => {
    router.replace("/signup");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flex:1, alignItems:"center" }} >
      <Image source={require("@/assets/images/login.png")} style={{
        width:"100%" ,
        height: 350,
      }} 
      resizeMode="contain"
      />
      <Text style = {{fontSize : 20, fontWeight : 700, color : "black"}} >
        This is the login page
      </Text>
      <View style={{
        paddingHorizontal:30,
        paddingVertical:10,
        gap:20,
        alignItems:"center"
      }}>
      <TextInput placeholder='Enter your email' 
      style={ styles.Txtip } 
      onChangeText={(a) => setValue(a)}
      />
      <TextInput placeholder='Enter your password' 
      style={ styles.Txtip } 
      onChangeText={(b) => setValue1(b)}
      />
      <MyButton title={"Login"} onPress={tologin}/>
      <Text style = {{fontSize : 20, fontWeight : 700, color : "black"}}>
        Don't have an account?
      </Text>
      <MyButton title={"Sign up"} onPress={tosignup}/>
      </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Txtip:{
    borderWidth:1, borderRadius:8, paddingHorizontal:10, height:40, width:400
  }
});