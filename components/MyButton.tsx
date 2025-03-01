import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MyButton = ({title, onPress}:{title:string, onPress:any}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={onPress}>

      <Text style={styles.text}>
          {title}
      </Text>

    </TouchableOpacity>
  );
};

export default MyButton

const styles = StyleSheet.create({
    button:{
        backgroundColor:"blue",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:5 ,
        alignItems:"center"
    },

    text:{
        fontSize:15 ,
        color:"white",
        fontWeight:"800",
    }
});