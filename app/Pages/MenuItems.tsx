import { View, Text,ScrollView , StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import MenuItemsProp from '../Props/MenuItemsProp'
import { useLocalSearchParams } from 'expo-router'
import { FlatList } from 'react-native-gesture-handler'


// export const checkIndex = (index: number) =>{
//   if(index === 1){
//     console.log("Index is: ",index);
//     Items = [
//       {key:1,value:"Espresso"},
//       {key:2,value:"Americano"},
//       {key:3,value:"Latte"},
//       {key:4,value:"Cappuccino"},
//       {key:5,value:"Flat White"},
//       {key:6,value:"Macchiato"},
//       {key:7,value:"Mocha"},
//       {key:8,value:"Cold Brew"},
//       {key:9,value:"Iced Coffee"},
//       {key:10,value:"Nitro Coffee"},
//       {key:11,value:"Affogato"},

//     ];
//   }
//   else if(index === 2){
//     Items = [
//       {key:1,value:"Black Tea"},
//       {key:2,value:"Green Tea"},
//       {key:3,value:"Herbal Tea"},
//       {key:4,value:"Chai Latte"},
//       {key:5,value:"Matcha Latte"},
//       {key:6,value:"Iced Tea"},
//     ];
//     console.log("Index is: ",index);
//   }
//   else if(index === 3){
//     Items = [
//       {key:1,value:"Hot Chocolate"}, 
//       {key:2,value:"Smoothies"},
//       {key:3,value:"Fresh Juices"},
//       {key:4,value:"Bottled Water"},
//       {key:5,value:"Soft Drinks"},
//     ]
//     console.log("Index is: ",index);
//   }
//   else if(index === 4){
//     Items = [
//       {key:1,value:"Croissants"}, 
//       {key:2,value:"Muffins"},
//       {key:3,value:"Bagels (with spreads)"},
//       {key:4,value:"Cookies"},
//       {key:5,value:"Brownies"},
//       {key:5,value:"Scones"},
//       {key:5,value:"Donuts"},
//       {key:5,value:"Cakes and Cheesecakes"},
//       {key:5,value:"Granola Bars"},
//     ]
    
//     console.log("Index is: ",index);
//   }
//   else if(index === 5){
//     Items = [
//       {key:1,value:"Sandwiches (veg & non-veg)"}, 
//       {key:2,value:"Paninis"},
//       {key:3,value:"Salads"},
//       {key:4,value:"Quiche"},
//       {key:5,value:"Toasties"},
//     ]


//     console.log("Index is: ",index);
//   }
//   else{
//     return "There is nothing here";
//   }
// }


const MenuItems = () => {
  const {index} = useLocalSearchParams();
  const [items,setItems] = useState<any[]>([])
  useEffect(() => {
    if(index) checkIndex(Number(index));
  }, [index]);


  const checkIndex = (index: number) =>{
    let Items: any[] =[]
  if(index === 1){
    Items = [
      { key: 1, value: 'Espresso', image: 'espresso',price:10.00 },
        { key: 2, value: 'Americano', image: 'americano',price:10.00 },
        { key: 3, value: 'Latte', image: 'latte',price:10.00 },
        { key: 4, value: 'Cappuccino', image: 'cappuccino',price:10.00 },
        { key: 5, value: 'Flat White', image: 'flat_white' ,price:10.00},
        { key: 6, value: 'Macchiato', image: 'macchiato',price:10.00 },
        { key: 7, value: 'Mocha', image: 'mocha',price:10.00 },
        { key: 8, value: 'Cold Brew', image: 'cold_brew',price:10.00 },
        { key: 9, value: 'Iced Coffee', image: 'iced_coffee',price:10.00 },
        { key: 10, value: 'Nitro Coffee', image: 'nitro_coffee',price:10.00 },
        { key: 11, value: 'Affogato', image: 'affogato',price:10.00 },

    ];
  }
  else if(index === 2){
    Items = [
      {key:1,value:"Black Tea"},
      {key:2,value:"Green Tea"},
      {key:3,value:"Herbal Tea"},
      {key:4,value:"Chai Latte"},
      {key:5,value:"Matcha Latte"},
      {key:6,value:"Iced Tea"},
    ];
    
  }
  else if(index === 3){
    Items = [
      {key:1,value:"Hot Chocolate"}, 
      {key:2,value:"Smoothies"},
      {key:3,value:"Fresh Juices"},
      {key:4,value:"Bottled Water"},
      {key:5,value:"Soft Drinks"},
    ]
  }
  else if(index === 4){
    Items = [
      {key:1,value:"Croissants"}, 
      {key:2,value:"Muffins"},
      {key:3,value:"Bagels (with spreads)"},
      {key:4,value:"Cookies"},
      {key:5,value:"Brownies"},
      {key:6,value:"Scones"},
      {key:7,value:"Donuts"},
      {key:8,value:"Cakes and Cheesecakes"},
      {key:9,value:"Granola Bars"},
    ]
    
  }
  else if(index === 5){
    Items = [
      {key:1,value:"Sandwiches (veg & non-veg)"}, 
      {key:2,value:"Paninis"},
      {key:3,value:"Salads"},
      {key:4,value:"Quiche"},
      {key:5,value:"Toasties"},
    ]
  }
  else{
    return "There is nothing here";
  }

  setItems(Items);
}
  return (
  
    <ScrollView style={style.scrollViewContainer}>
      <View>
      {items.map(item => (
         <MenuItemsProp key={item.key} value={item.value} image={item.image} price={item.price}/>
      ))}
      </View>
    </ScrollView>
    
);

}

const style = StyleSheet.create({
  scrollViewContainer:{
    backgroundColor:"balck"
  }
})

export default MenuItems