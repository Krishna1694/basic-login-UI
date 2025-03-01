import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import {View, Text} from "react-native";

const index = () => {
  const router = useRouter();
  const tocontinue = () => {
    router.navigate("/login");
  };
  return (
    <View 
    style = {{
      flex : 1,
      justifyContent : "center",
      alignItems : "center" 
    }}>
      <Text style = {{fontSize : 20, fontWeight : 700, color : "black"}}>
        This is the first screen of the app
      </Text>
      <MyButton title={"Continue"} onPress={tocontinue}/>
    </View>
    );
};

export default index;