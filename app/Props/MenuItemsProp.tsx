import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const MenuItemsProp = ({value,image}:{value:string , image:any}) => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.imageContainer}/>
      <Text style={style.itemName}>{value}</Text>
      
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    margin:25,
    paddingTop:20,
    paddingLeft:20,
    borderRadius:5,
    borderColor:'black',
    borderWidth:1,
    elevation:3
  },

  imageContainer:{
    width:250,
    height:250,
    marginLeft:7
  },
  itemName:{
    marginTop:2,
    marginBottom:5,
    fontSize:20,
    fontWeight:'heavy',
    textAlign:"center"
  }
})

export default MenuItemsProp