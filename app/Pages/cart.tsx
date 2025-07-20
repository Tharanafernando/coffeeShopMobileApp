import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Dropdown } from 'react-native-element-dropdown'
import { Label } from '@react-navigation/elements'

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
    <View style={style.container}>
      {/* <Image source={{uri:image as string}} style={style.image}/> */}
       <Image source={resolvedImage} style={style.image} />
       <View style={style.sectionItem}>
        <Text style={style.topicText}>{value}</Text>
        <Text>{price}</Text>
        <View style={style.selectDropDown}>
              <Text>
                Quantity:
              </Text>
              <View style={style.pickerStyles}>
                  <Dropdown
                    search = {true}
                    data={data}
                    placeholder='quantity'
                    labelField="label"
                    valueField='value'
                    value={selectedValue}
                    onChange={item => {setSelectedValue(item.value)}}
                    style={{ height: 50, width: 150, borderColor:"black",marginLeft:2 }}
                    placeholderStyle={{paddingLeft:20}}
                    selectedTextStyle={{paddingLeft:20}}
                  />
              </View>
              <View>
                <Text style={{marginTop:20}}>
                Unit Price: 
                
              </Text>
              <Text style={{textAlign:'left',marginLeft:20}}> {unitPrice}</Text>
              </View>
              
              <Text>
                Total Amount: 
                
              </Text>
              <Text style={{marginLeft:50}} >{totalPrice}</Text>

            

              
              
        </View>
         
        
        
       </View>
       
    </View>
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
       alignContent:'center'
       
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
    }
    
  }
)