import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export const elementList = [
    {key:1,value:'Coffee & Espresso Drinks'},
    {key:2,value:'Teas'},
    {key:3,value:'Other Beverages'},
    {key:4,value:'Bakery and Snacks'},
    {key:5,value:'Light Meals'}

]
const CoffeeShopMenu = () => {
  return (
    <View style={styles.container}>
        <FlatList 
           data={
            elementList
           }
           
           renderItem={({item})=>
            <TouchableOpacity style={styles.itemList} onPress={()=>router.push({pathname:'/Pages/MenuItems',params:{index:item.key}})}>
                <Text style={styles.elements}> {item.value}</Text>
            </TouchableOpacity>
            }
        />

        
     
    </View>
  )
}

export default CoffeeShopMenu

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        width:'100%',
        flex:1,
        paddingTop: 50,
        paddingHorizontal:20
    },
    elements:{
        fontSize:18,
        color:"white",
        
    },
    itemList: {
        backgroundColor: '#333',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10
    },
})