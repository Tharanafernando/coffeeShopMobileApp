import { View, Text , StyleSheet, ImageBackground} from 'react-native'
import React from 'react'
import LatteImage from "@/assets/images/stock-of-mix-a-cup-coffee-latte.jpg"
import { Link } from 'expo-router'
const App = () => {
  return (
    <View style={styles.container}>
     
      <ImageBackground
        source={LatteImage}
        resizeMode='cover'
        style={styles.image}
      >
         <Link href="/(tabs)/CoffeeShopMenu" style={styles.link}>Menu</Link>
        
        <Text style={styles.text}>Coffee shop</Text>

        </ImageBackground>
      
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'black',
    width:'100%'
  },
  link:{
    textAlign:'left',
    fontSize: 15,
    fontWeight:'200',
    color:'white',
    margin: 15,
    backgroundColor:'black',
    width:'100%',
    textAlignVertical:'center'
  },

  text:{
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    backgroundColor:'black',
    justifyContent:'center',
    textAlign:'center'
  },
  image:{
    width: '100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'

  }
})