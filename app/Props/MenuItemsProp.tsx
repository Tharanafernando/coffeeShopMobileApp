import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { router } from 'expo-router';
import { Button,PaperProvider } from 'react-native-paper';

const MenuItemsProp = ({value,image,price}:{value:string , image:string,price:BigInteger}) => {
 
  const imageMap: Record<string, any> = {
    espresso: require('@/assets/images/CoffeeImages/Espresso.jpeg'),
    americano: require('@/assets/images/CoffeeImages/americano-coffee.jpg'),
    latte: require('@/assets/images/CoffeeImages/Latte.jpg'),
    cappuccino: require('@/assets/images/CoffeeImages/Cappuccino.jpg'),
    flat_white: require('@/assets/images/CoffeeImages/Flat White.jpg'),
    macchiato: require('@/assets/images/CoffeeImages/Macchiato.jpg'),
    mocha: require('@/assets/images/CoffeeImages/MochaIced.jpg'),
    cold_brew: require('@/assets/images/CoffeeImages/Cold Brew.jpg'),
    iced_coffee: require('@/assets/images/CoffeeImages/Iced Coffee.jpg'),
    nitro_coffee: require('@/assets/images/CoffeeImages/Nitro Coffee.jpg'),
    affogato: require('@/assets/images/CoffeeImages/Affogato.jpg'),
  };


  const resolvedImage = imageMap[image];
  return (
    <PaperProvider>
        <View style={style.container}>
          <Image source={resolvedImage} style={style.imageContainer}/>
          <Text style={style.itemName}>{value}</Text>
          <Text>Price: {`$ ${price}`}</Text>
         <Button
            style={style.button}
            mode="contained"
            onPress={() =>
              router.push({
                pathname: '/Pages/cart',
                params: {
                  value,
                  image // convert image module to string
                },
              })
            }
          >
            Buy Now
          </Button>
        </View>
    </PaperProvider>
  
  )
}

const style = StyleSheet.create({
  container:{
    margin:25,
    paddingBottom:20,
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
  },
  button:{
    marginLeft:70,
    width:"50%",
    
  
  }
})

export default MenuItemsProp