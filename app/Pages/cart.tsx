import { View, Text,StyleSheet,Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Dropdown } from 'react-native-element-dropdown'
import { Label } from '@react-navigation/elements'
import { PaperProvider,Button } from 'react-native-paper'
const Cart = () => {
  const {value,image,price} = useLocalSearchParams();
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
  const resolvedImage = imageMap[image as string];
  const [selectedValue,setSelectedValue] = useState(null);
  const data = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
  ];
  const unitPrice = 10;
  let totalPrice = unitPrice * selectedValue!;
  return (
    <PaperProvider>

    
    <View style={style.container}>
      {/* <Image source={{uri:image as string}} style={style.image}/> */}
       <Image source={resolvedImage} style={style.image} />
       <View style={style.sectionItem}>
        <Text style={style.topicText}>{value}</Text>
        <Text>{price}</Text>
        <View style={style.selectDropDown}>
              <Text style={style.labelText}>
                Quantity:
              </Text>
              <View style={style.pickerStyles}>
                  <Dropdown
                    search = {true}
                    data={data}
                    placeholder='0'
                    labelField="label"
                    valueField='value'
                    value={selectedValue}
                    onChange={item => {setSelectedValue(item.value)}}
                    style={{ height: 50, width: 150, borderColor:"black",marginLeft:2 }}
                    placeholderStyle={{paddingLeft:20}}
                    selectedTextStyle={{paddingLeft:20}}
                  />
              </View>
              <View style={{marginTop:20, flexDirection:'row',justifyContent: 'space-between',width:200}}>
                <Text style={style.labelText}>Unit Price:</Text>
                <Text style={style.valueText}>{unitPrice}</Text>
             
              
              </View>
              <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', width: 200 }}>
                <Text style={style.labelText}>Total Amount:</Text>
                <Text style={style.valueText}>{totalPrice || 0}</Text>
              </View>

              <Button
               style={style.buttons}
               mode='contained'
              >
                Add to cart
              </Button>

              <Button
                style={style.buttons}
                mode='contained'
              >
                Buy More
              </Button>    
        </View>
       </View>
       
    </View>
    </PaperProvider>
  )
  
}

export default Cart

const style = StyleSheet.create(
  {
    image:{
      height:200,
      width:200,
      resizeMode:'cover'
    },
    selectDropDown:{
       marginTop:10,
       textAlign:'center',
       alignContent:'center',
       fontSize:70
       
    },

    labelText:{
      fontSize:20,
      fontWeight:'300'
    },

    container:{
      margin:80,
      alignContent:'center',
      borderColor:'black',
      height:"50%",
      width:"50%"
    },

    sectionItem:{
      marginTop:10
    },

    topicText:{
      textAlign:'center',
      marginTop:10,
      fontSize:20,
      
    },
    pickerStyles:{
      borderWidth:1,
      borderRadius:30,
      borderColor:"black",
      marginTop:10
    },
    valueText: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'left',
    },
    buttons:{ 
      alignItems:'center',
      marginTop:20,
     
      
    }
  }
)